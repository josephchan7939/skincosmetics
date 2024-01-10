import { BaseEntity } from "@/common/base.entity";
import { Column, Entity, OneToMany } from "typeorm";
import { UserContact } from "./usercontact.entity";
import { Exclude } from "class-transformer";

@Entity()
export class User extends BaseEntity {
    @Column({unique:true})
    email:string;

    @Exclude({ toPlainOnly: true })
    @Column({length:32})
    password:string;

    @Exclude({ toPlainOnly: true })
    @Column({length:32})
    psalt:string;

    @Column({nullable:true})
    fullname:string;

    @Column({nullable:true})
    mobileno:string;

    @Column({type:'bool'})
    isSubscribe:boolean;

    @OneToMany(()=>UserContact,(contact)=>contact.user,{nullable:true})
    contacts:UserContact[];
}
