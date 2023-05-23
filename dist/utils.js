"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Country_1 = require("./entities/Country");
const datasource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "test.db",
    synchronize: true,
    entities: [Country_1.Country],
    logging: ["query", "error"],
});
exports.default = datasource;
