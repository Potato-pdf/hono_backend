import { Context } from "hono"

export const create_user = (c: Context) => {
    return c.json({test:"controler"})
}
