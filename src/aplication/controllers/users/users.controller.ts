import { Context } from "hono"

export const create_user = (c: Context) => {
    return c.json({test:"controler"})
}

export const get_all_users = (c:Context) => {
    return c.json({test:"controler"})
}