import { Context } from "hono"
import { AppDataSource } from "../../../Infrestructure/config/database/db.conection"
import { user_interface } from "../../../domain/interfaces/user/user.interface"
import { user_entitie } from "../../../domain/entities/user/user.entitie"

const user_repository = AppDataSource.getRepository(user_entitie)

export const create_user = async (c: Context) => {
    try {
        const usr: user_interface = await c.req.json()

        if (!usr.email || !usr.name || !usr.password) {
            throw new Error("Fill all the inputs")
        }
        const existing_user = await user_repository.findOne({
            where: { email: usr.email },
        });
        if (existing_user) {
        return c.json({ error: "Email already registered" }, 400);
    }
        const user = user_repository.create({
            name: usr.name,
            email: usr.email,
            password: usr.password
        });
        await user_repository.save(user);
        c.status(201)
        return c.json({ test: "succesfull user create", user })
    }
    catch (err) {
        console.error(`Error: ${err}`)
        return c.json({ error: "Server error", err }, 500);
    }
}

export const get_all_users = (c: Context) => {
    return c.json({ test: "controler" })
}