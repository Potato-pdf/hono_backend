import { Context } from "hono";
import { AppDataSource } from "../../Infrestructure/config/database/db.conection";
import { user_entitie } from "../../domain/entities/user/user.entitie";
import { createToken } from "../../Infrestructure/config/JWT/payload.jwt";

const auth_repository = AppDataSource.getRepository(user_entitie)

export const auth_logic = async (c : Context) =>{
        try {
            const user_request = await c.req.json()
            if (!user_request.email || !user_request.password){
                throw new Error ("Email and password are required")
            }
            const user_to_validate = await auth_repository.findOneBy({
                email : user_request.email
            })
                if (!user_to_validate){
                    c.status(404)
                    return c.json({error: "user didnt exist"})
                }
            const password_verify = await Bun.password.verify(user_request.password, user_to_validate.password)
            if (!password_verify){
                c.status(401)
                return c.json({error: "Invalid password"})
            }

            const token = createToken(user_to_validate);
            return c.json({ message: "Login successful", token, user: user_to_validate })
        }     
        catch (err) {
        console.error(`Error: ${err}`)
        return c.json({ error: "Server error", err }, 500);
    }
}