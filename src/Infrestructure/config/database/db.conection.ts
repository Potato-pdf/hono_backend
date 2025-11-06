import "reflect-metadata";
import { DataSource } from "typeorm";
import { user } from "../../../domain/entities/user/user.entitie";
import { product } from "../../../domain/entities/products/products.entitie";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 11432,
    username: "user",
    password: "password",
    database: "hono_db",
    synchronize: true,
    logging: false,
    entities: [user, product],
});
