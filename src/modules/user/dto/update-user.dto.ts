import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt, Min } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @Min(0)
    @IsInt()
    id:number;
}
