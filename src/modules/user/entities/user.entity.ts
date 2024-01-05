import { BaseEntity } from "@/common/base.entity";
import { Entity } from "typeorm";

@Entity()
export class User extends BaseEntity {
  
    email:string

}
