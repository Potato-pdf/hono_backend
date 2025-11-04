import { Hono } from "hono"
import * as controller from "../../../aplication/controllers/products/product.controller"


export const product = new Hono()

product.post("/create", controller.create_product)
product.get("/all", controller.get_all_products)
product.get("/product", controller.get_product_by_id)
product.put("/update", controller.update_product)
product.delete("/delete", controller.delete_product)

