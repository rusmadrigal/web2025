export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const path = searchParams.get("path"); // opcional
  
    // ✅ Valida el secret desde variables de entorno
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }
  
    try {
      if (path) {
        // 🔁 Realiza una petición interna para refrescar la ruta dinámica
        await fetch(`https://rusmadrigal.com${path}`);
      }
  
      return new Response("✅ Revalidación exitosa", { status: 200 });
    } catch (err) {
      return new Response("❌ Error durante la revalidación", { status: 500 });
    }
  }
  