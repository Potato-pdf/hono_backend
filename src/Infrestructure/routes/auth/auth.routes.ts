import { Hono } from "hono";
import { auth_logic } from "../../../aplication/auth/auth";


export const auth = new  Hono()
auth.post("/login", auth_logic );
