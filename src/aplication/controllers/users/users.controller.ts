import { Context } from "hono"
import { AppDataSource } from "../../../Infrestructure/config/database/db.conection"
import { user_interface } from "../../../domain/interfaces/user/user.interface"
import { user_entitie } from "../../../domain/entities/user/user.entitie"

const user_repository = AppDataSource.getRepository(user_entitie)

export const create_user = async (c: Context) => {
    try{
        const usr : user_interface = await c.req.json()
        const user = await user_repository.create({
            name : usr.name,
            email : usr.email,
            password : usr.password
        });

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