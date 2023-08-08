import { IsEmail, IsString, IsNotEmpty } from "class-validator";
import { Exclude } from "class-transformer";
export class UserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @Exclude()
    password: string;
}