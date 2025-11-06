import { Context } from "hono"
import { AppDataSource } from "../../../Infrestructure/config/database/db.conection"
import { product_entitie } from "../../../domain/entities/products/products.entitie"

const user_repository = AppDataSource.getRepository(product_entitie)

export const create_user = (c: Context) => {
    try{
        
    return c.json({test:"controler"})
    }
    catch(err){
        console.error(`Error: ${err}`)
        return c.json({error: "Server error", err}, 400);
    }
}

export const get_all_users = (c:Context) => {
    return c.json({test:"controler"})
}