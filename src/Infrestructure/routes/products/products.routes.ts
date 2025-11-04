import { Hono } from "hono"
import { create_product, get_all_products, get_product_by_id } from "../../../aplication/controllers/products/product.controller"


export const product = new Hono()

product.post("/create", create_product)
product.get("/all", get_all_products)
product.get("/product", get_product_by_id)