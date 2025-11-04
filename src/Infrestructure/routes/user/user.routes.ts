import { Hono } from "hono";
import { create_user, get_all_users } from "../../../aplication/controllers/users/users.controller";


export const  user = new Hono()

user.post("/create", create_user)
user.get("/all", get_all_users)