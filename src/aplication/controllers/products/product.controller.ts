import { Context } from "hono"
export const create_product = (c : Context)=>{
    return c.json({test:"controller"})
}