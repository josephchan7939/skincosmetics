import { BaseEntity } from "@/common/base.entity";
import { Column, Entity } from "typeorm";

@Entity()
export class UserSubscribe extends BaseEntity{

     @Column({unique:true})
     email:string;

}