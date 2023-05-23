"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const Country_1 = require("./resolvers/Country");
const apollo_server_1 = require("apollo-server");
const utils_1 = __importDefault(require("./utils"));
const PORT = 5000;
async function bootstrap() {
    // build TypeGraphQL executable schema
    const schema = await (0, type_graphql_1.buildSchema)({
        resolvers: [Country_1.CountryResolver],
        validate: {
            forbidUnknownValues: false,
        },
        // automatically create `schema.gql` file with schema definition in current folder
        //emitSchemaFile: path.resolve(__dirname, "schema.gql"),
    });
    // Create GraphQL server
    const server = new apollo_server_1.ApolloServer({ schema });
    // Start the server
    try {
        await utils_1.default.initialize();
        console.log("Server started!");
        // Start the server
        const { url } = await server.listen(PORT);
        console.log(`Server is running, GraphQL Playground available at ${url}`);
    }
    catch (err) {
        console.log("An error occured");
        console.error(err);
    }
}
bootstrap();
