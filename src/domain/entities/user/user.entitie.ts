import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class user {
    @PrimaryGeneratedColumn()
    id!: string;
    @Column()
    name!: string
    @Column({ unique: true })
    email!: string;
    @Column()
    password!: string;

}