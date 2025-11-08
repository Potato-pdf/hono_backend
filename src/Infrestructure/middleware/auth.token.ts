import { Context , Next} from "hono";
import { verify } from "jsonwebtoken";

export const auth_token = async (c: Context, next : Next)=>{
    try {
        const true_token = c.req.header("Authorization")
        if (!true_token) {
            c.status(401)
            return c.json({error: "You need a token"})
        }
        await verify(true_token, Bun.env.JWT_SECRET )
        await next()
    }     
    catch (err) {
        console.error(`Error: ${err}`)
        return c.json({ error: "Server error", err }, 500);
    }
}