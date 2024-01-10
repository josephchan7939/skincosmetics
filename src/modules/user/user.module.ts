import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserContact } from './entities/usercontact.entity';
import { UserSubscribe } from './entities/usersub.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([User,UserContact,UserSubscribe]),
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
