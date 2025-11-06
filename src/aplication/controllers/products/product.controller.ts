import { Context } from "hono"
import { AppDataSource } from "../../../Infrestructure/config/database/db.conection"
import { product } from "../../../domain/entities/products/products.entitie"

const product_repository = AppDataSource.getRepository(product);

export const create_product = async (c : Context)=>{
    try {
        const prod = await c.req.json()
        return c.json({test:"controller"})
        
    }
    catch(err){
        console.error(`error:${err}}`)
        return c.json({error:"Server error", err}, 400
        );
    }
}

export const get_all_products = (c : Context)=>{
    return c.json({test:"controller"})
}

export const get_product_by_id = (c:Context)=>{
    return c.json({test:"controller"})
}

export const update_product = (c:Context) => {
    return c.json({test:"controller"})
}

export const delete_product = (c: Context) => {
    return c.json({test:"controller"})
}