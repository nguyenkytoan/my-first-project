import { Optional } from "@nestjs/common";
import { IsNotEmpty, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    email?: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;
}