import { Hono } from "hono"
import { create_product } from "../../../aplication/controllers/products/product.controller"


export const product = new Hono()

product.post("/create", create_product)