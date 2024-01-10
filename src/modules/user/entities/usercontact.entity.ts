import { BaseEntity } from "@/common/base.entity";
import { Column, Entity, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class UserContact extends BaseEntity{
    
    @Column()
    country:string;

    @Column()
    firstname:string;

    @Column()
    lastname:string;

    @Column()
    address:string;
    
    @Column()
    city:string;

    @Column() 
    region:string;

    @Column()
    phone:string;

    @ManyToOne(()=>User,(user)=>user.contacts,{cascade:true})
    user:User;
}