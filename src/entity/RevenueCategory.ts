import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"

@Entity()
export class RevenueCategory {
    @PrimaryGeneratedColumn()
    id: number;
}
