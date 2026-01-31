import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hglpgsjgoxlcehhmahyo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnbHBnc2pnb3hsY2VoaG1haHlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2Mjg1MDgsImV4cCI6MjA4NTIwNDUwOH0.tQOVjvmgcMNeugx72urCWgJ9kA0GEuWD-U5GecK63xg";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
  },
});

/**
 * Tipos de usuario para Supabase
 */
export interface SupabaseUser {
  id: string;
  email: string;
  nombre: string;
  apellido?: string;
  created_at: string;
  kajabi_id?: string;
}

/**
 * Registrar un nuevo usuario en Supabase
 */
export async function registerUser(
  email: string,
  password: string,
  nombre: string,
  apellido?: string
) {
  try {
    // Crear usuario en Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (authError) {
      throw new Error(authError.message);
    }

    // Crear registro en tabla 'users'
    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert([
        {
          id: authData.user?.id,
          email,
          nombre,
          apellido,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    if (userError) {
      throw new Error(userError.message);
    }

    return { success: true, user: userData?.[0] };
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
}

/**
 * Iniciar sesión
 */
export async function loginUser(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true, user: data.user };
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
}

/**
 * Cerrar sesión
 */
export async function logoutUser() {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  } catch (error) {
    console.error("Error logging out:", error);
    throw error;
  }
}

/**
 * Obtener usuario actual
 */
export async function getCurrentUser() {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

/**
 * Sincronizar usuario con Kajabi
 */
export async function syncUserWithKajabi(
  email: string,
  nombre: string,
  apellido?: string
) {
  try {
    // Aquí iría la lógica para sincronizar con Kajabi
    // Por ahora, solo registramos en Supabase
    console.log("Syncing user with Kajabi:", {
      email,
      nombre,
      apellido,
    });

    // TODO: Implementar integración con Kajabi API
    // Esto podría ser un webhook o una llamada directa a Kajabi

    return { success: true };
  } catch (error) {
    console.error("Error syncing with Kajabi:", error);
    throw error;
  }
}
