import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsString()
    email?: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}