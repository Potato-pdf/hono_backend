import { COMPOSED_HANDLER } from "hono/utils/constants";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class product_entitie{
    @PrimaryGeneratedColumn()
    id!:string
    @Column()
    name!:string
    @Column()
    description!:string
    @Column()
    price!:number
    @Column()
    stock!:number
}