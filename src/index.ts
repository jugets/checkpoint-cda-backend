import { buildSchema } from "type-graphql";
import { CountryResolver } from "./resolvers/Country";
import * as path from "path";
import { ApolloServer } from "apollo-server";
import datasource from "./utils";


const PORT = 5000;
async function bootstrap() {
    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: [CountryResolver],
      validate: {
        forbidUnknownValues: false,
      },
      // automatically create `schema.gql` file with schema definition in current folder
     //emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });
  
    // Create GraphQL server
    const server = new ApolloServer({ schema });
  
    // Start the server
    try {
        await datasource.initialize();
        console.log("Server started!");
        // Start the server
        const { url } = await server.listen(PORT);
        console.log(`Server is running, GraphQL Playground available at ${url}`);
      } catch (err) {
        console.log("An error occured");
        console.error(err);
      }
  }
  
  bootstrap();