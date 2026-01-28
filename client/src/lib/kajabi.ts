/**
 * Integración con Kajabi API
 * Sincroniza usuarios de Supabase con Kajabi automáticamente
 */

const KAJABI_CLIENT_ID = "r5WhzXPeUx39BEnQq3smpgHC";
const KAJABI_CLIENT_SECRET = "2B2N9ZeGDSU75wH8bkAMAZ5x";
const KAJABI_API_URL = "https://api.kajabi.com/v1";

/**
 * Obtener token de acceso de Kajabi
 */
async function getKajabiAccessToken(): Promise<string> {
  try {
    const response = await fetch(`${KAJABI_API_URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: KAJABI_CLIENT_ID,
        client_secret: KAJABI_CLIENT_SECRET,
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      throw new Error(`Error getting Kajabi token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Error getting Kajabi access token:", error);
    throw error;
  }
}

/**
 * Crear o actualizar contacto en Kajabi
 */
export async function syncUserToKajabi(
  email: string,
  nombre: string,
  apellido?: string
): Promise<{ success: boolean; kajabiId?: string }> {
  try {
    // Obtener token de acceso
    const accessToken = await getKajabiAccessToken();

    // Preparar datos del contacto
    const contactData = {
      email: email,
      first_name: nombre,
      last_name: apellido || "",
      source: "KS Healing - Libro Ejercicios",
      tags: ["ks-healing-book", "ejercicios"],
    };

    // Crear contacto en Kajabi
    const response = await fetch(`${KAJABI_API_URL}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(contactData),
    });

    if (!response.ok) {
      // Si el contacto ya existe, intentar actualizarlo
      if (response.status === 409) {
        return await updateKajabiContact(email, contactData, accessToken);
      }
      throw new Error(`Error creating Kajabi contact: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("✓ Usuario sincronizado con Kajabi:", data);

    return {
      success: true,
      kajabiId: data.id,
    };
  } catch (error) {
    console.error("Error syncing user to Kajabi:", error);
    // No lanzar error para no bloquear el registro en Supabase
    return { success: false };
  }
}

/**
 * Actualizar contacto existente en Kajabi
 */
async function updateKajabiContact(
  email: string,
  contactData: any,
  accessToken: string
): Promise<{ success: boolean; kajabiId?: string }> {
  try {
    // Buscar contacto por email
    const searchResponse = await fetch(
      `${KAJABI_API_URL}/contacts?email=${encodeURIComponent(email)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (!searchResponse.ok) {
      throw new Error("Error searching for Kajabi contact");
    }

    const searchData = await searchResponse.json();
    if (!searchData.data || searchData.data.length === 0) {
      throw new Error("Contact not found");
    }

    const contactId = searchData.data[0].id;

    // Actualizar contacto
    const updateResponse = await fetch(`${KAJABI_API_URL}/contacts/${contactId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(contactData),
    });

    if (!updateResponse.ok) {
      throw new Error("Error updating Kajabi contact");
    }

    console.log("✓ Usuario actualizado en Kajabi");

    return {
      success: true,
      kajabiId: contactId,
    };
  } catch (error) {
    console.error("Error updating Kajabi contact:", error);
    return { success: false };
  }
}

/**
 * Enviar email de bienvenida a través de Kajabi
 */
export async function sendWelcomeEmailViaKajabi(
  email: string,
  nombre: string
): Promise<boolean> {
  try {
    const accessToken = await getKajabiAccessToken();

    const response = await fetch(`${KAJABI_API_URL}/emails/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        to: email,
        subject: `¡Bienvenido a KS Healing, ${nombre}!`,
        template: "ks-healing-welcome",
        variables: {
          nombre: nombre,
        },
      }),
    });

    if (!response.ok) {
      console.warn("Could not send welcome email via Kajabi");
      return false;
    }

    console.log("✓ Email de bienvenida enviado");
    return true;
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return false;
  }
}
