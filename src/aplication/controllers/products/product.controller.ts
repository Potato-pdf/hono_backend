import { Context } from "hono"

export const create_product = (c : Context)=>{
    return c.json({test:"controller"})
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