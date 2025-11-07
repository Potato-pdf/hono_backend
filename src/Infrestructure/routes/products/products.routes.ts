import { Hono } from "hono"
import * as controller from "../../../aplication/controllers/products/product.controller"


export const product = new Hono()

product.post("/create", controller.create_product)
product.get("/all", controller.get_all_products)
product.get("/product/:id", controller.get_product_by_id)
product.put("/update/:id", controller.update_product)
product.delete("/delete/:id", controller.delete_product);

