import "reflect-metadata";
import { DataSource } from "typeorm";
import { user } from "../../../domain/entities/user/user.entitie";
import { product } from "../../../domain/entities/products/products.entitie";


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "tu_contraseña",
    database: "mi_base_datos",
    synchronize: true,
    logging: false,
    entities: [user, product],
});
