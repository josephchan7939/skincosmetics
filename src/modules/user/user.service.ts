import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { isEmpty } from 'lodash';
import { generateUUID } from '@/helper/uuid';
import { MD5 } from '@/helper/crypto';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
   constructor(@InjectRepository(User) private userRepo:Repository<User>){

   }

 async create(createUserDto: CreateUserDto) {
    const user = await this.userRepo.findOneBy({email:createUserDto.email})
    if (!isEmpty(user))
    throw new Error(`user email '${createUserDto.email}' has existed!`);

    const salt = generateUUID(32);
    let passAfterCrypt = MD5(`${createUserDto.password}${salt}`);

    try{
     const user =  this.userRepo.create({
    ...createUserDto,
    psalt:salt,
    password:passAfterCrypt
    });

   const userSaved = await this.userRepo.save(user)
    return userSaved;
  }
   catch(error){
    throw error;
   }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
