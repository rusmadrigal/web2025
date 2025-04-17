import { config } from "dotenv";
import { GraphQLClient } from "graphql-request";

// Carga variables de entorno desde .env.local
config({ path: ".env.local" });

const hygraph = new GraphQLClient(process.env.HYGRAPH_API, {
  headers: {
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  },
});

const query = `{
  blogPosts {
    title
    slug
  }
}`;

const run = async () => {
  try {
    const data = await hygraph.request(query);
    console.log("✅ Conexión exitosa:");
    console.log(data);
  } catch (error) {
    console.error("❌ Error al conectar con Hygraph:", error);
  }
};

run();
