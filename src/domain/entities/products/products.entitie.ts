import { COMPOSED_HANDLER } from "hono/utils/constants";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class product{
    @PrimaryGeneratedColumn()
    id!:string
    @Column()
    name!:string
    @Column()
    price!:number
}