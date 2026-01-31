# Integración con Kajabi - KS Healing

## Descripción General

Este documento describe cómo se integra Supabase con Kajabi para sincronizar automáticamente los usuarios registrados en kshealing.com con tu CRM de Kajabi.

## Flujo Actual

```
1. Usuario escanea QR → kshealing.com/ejercicio-X
2. Si no está registrado → Modal de registro
3. Usuario completa formulario (nombre, email, contraseña)
4. Se crea usuario en Supabase Auth
5. Se registra en tabla 'users' de Supabase
6. [PRÓXIMO] Se sincroniza automáticamente con Kajabi
7. Usuario puede acceder a los videos
```

## Configuración Necesaria en Kajabi

Para completar la integración, necesitas:

### 1. Obtener API Key de Kajabi

1. Ve a tu panel de Kajabi
2. Dirígete a **Settings → Integrations → API**
3. Copia tu **API Key**
4. Guarda este valor de forma segura

### 2. Crear un Webhook en Supabase (Opcional pero Recomendado)

Un webhook automático enviará los datos del usuario a Kajabi cuando se registre.

**Pasos:**
1. En Supabase, ve a **Database → Webhooks**
2. Crea un nuevo webhook con estos detalles:
   - **Event**: Insert (cuando se inserta un nuevo usuario)
   - **Table**: users
   - **Webhook URL**: Tu endpoint de Kajabi o un endpoint personalizado
   - **HTTP Method**: POST

### 3. Configurar la Sincronización

Hay dos opciones:

#### Opción A: Sincronización Manual (Más Simple)
Después del registro, el usuario se crea en Supabase. Luego, puedes:
- Exportar la lista de usuarios desde Supabase
- Importarlos manualmente a Kajabi
- O usar Zapier/Make para automatizar

#### Opción B: Sincronización Automática (Recomendado)
Usar una función serverless que se dispare automáticamente:

```typescript
// Ejemplo de función que se ejecutaría en Supabase
export async function syncUserToKajabi(userId: string, email: string, nombre: string) {
  const kajabiApiKey = process.env.KAJABI_API_KEY;
  
  const response = await fetch('https://api.kajabi.com/v1/contacts', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${kajabiApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      first_name: nombre,
      source: 'KS Healing Book',
    }),
  });
  
  return response.json();
}
```

## Variables de Entorno Necesarias

Agrega estas variables a tu proyecto (en Supabase o en tu servidor):

```
KAJABI_API_KEY=tu_api_key_aqui
KAJABI_API_URL=https://api.kajabi.com/v1
```

## Datos que se Sincronizan

Cuando un usuario se registra en kshealing.com, se envía a Kajabi:

- **Email**: Correo electrónico del usuario
- **Nombre**: Nombre completo
- **Apellido**: Apellido (si lo proporciona)
- **Fuente**: "KS Healing Book" (para identificar de dónde vino)
- **Fecha de Registro**: Cuándo se registró

## Próximos Pasos

1. **Obtén tu API Key de Kajabi** (ver arriba)
2. **Proporciona el API Key** para que se configure la sincronización automática
3. **Prueba el flujo**: Regístrate en una página de ejercicio y verifica que aparezca en Kajabi
4. **Configura secuencias de email** en Kajabi para nuevos registros desde KS Healing

## Troubleshooting

### Los usuarios no aparecen en Kajabi
- Verifica que el API Key sea correcto
- Revisa los logs de Supabase para errores
- Asegúrate de que el webhook esté activo

### El registro en kshealing.com falla
- Verifica que Supabase esté disponible
- Revisa la consola del navegador para errores
- Comprueba que el email no esté ya registrado

## Seguridad

- **Nunca compartas tu API Key de Kajabi** públicamente
- Guarda las credenciales en variables de entorno
- Usa HTTPS para todas las comunicaciones
- Implementa validación de datos en el backend

## Contacto

Para preguntas sobre la integración, contacta con el equipo de desarrollo.
