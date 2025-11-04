import { Hono } from "hono";
import { create_user } from "../../../aplication/controllers/users/users.controller";


export const  user = new Hono()

user.post("/create", create_user)