import { DataSource } from "typeorm";
import { Country } from "./entities/Country";

const datasource = new DataSource({
    type: "sqlite",
    database: "test.db",
    synchronize: true,
    entities: [Country],
    logging: ["query", "error"],
  });
  
  export default datasource;