import { Context } from "hono"
import { AppDataSource } from "../../../Infrestructure/config/database/db.conection"
import { product_entitie } from "../../../domain/entities/products/products.entitie"
import { producto_iinterface } from "../../../domain/interfaces/product/product.interface";

const product_repository = AppDataSource.getRepository(product_entitie);

export const create_product = async (c: Context) => {
    try {
        const prod: producto_iinterface = await c.req.json()
        const product = product_repository.create({
            name: prod.name,
            price: prod.price,
            description: prod.description,
            stock: prod.stock
        })
        await product_repository.save(product)
        c.status(201)
        return c.json({ test: "succes create", product })
    }
    catch (err) {
        console.error(`error:${err}}`)
        return c.json({ error: "Server error", err }, 500
        );
    }
}

export const get_all_products = async (c: Context) => {
    try {
        const all_products = await product_repository.find({})
        c.status(200)
        return c.json({ test: "Get products", data: all_products })
    }
    catch (err) {
        console.error(`error : ${err}`)
        c.status(500);
        return c.json({ error: "Server error", details: err });


    }
}

export const get_product_by_id = async (c: Context) => {
    try {
        const id = c.req.param("id");
        const product_to_find = await product_repository.findOneBy({ id: parseInt(id) });

        if (!product_to_find) {
            c.status(404);
            return c.json({ error: "Product not found" });
        }

        c.status(200);
        return c.json({ message: "Product found", data: product_to_find });
    } catch (err) {
        console.error("Error:", err);
        c.status(500);
        return c.json({ error: "Server error", details: err });
    }
};



export const update_product = (c: Context) => {
    return c.json({ test: "controller" })
}


export const delete_product = async (c: Context) => {
  console.log("params:", c.req.param("id"));
  try {
    const id = c.req.param("id");
    const product_to_delete = await product_repository.findOneBy({ id: parseInt(id) });

    if (!product_to_delete) {
      c.status(404);
      return c.json({ error: "Product not found" });
    }

    await product_repository.remove(product_to_delete);

    c.status(200);
    return c.json({
      message: "Product deleted successfully",
      deleted: product_to_delete,
    });
  } catch (err) {
    console.error("Error:", err);
    c.status(500);
    return c.json({ error: "Server error", details: err });
  }
};
