import { Body, Controller, Delete, Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import mongoose from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) { };

    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string) {
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) throw new HttpException('User not found', 404);

        const user = await this.usersService.getUserById(id);
        if (!user) throw new HttpException('User not found', 404);
        return user;
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }

    @Patch(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) throw new HttpException('Invalid ID', 404);

        return this.usersService.updateUser(id, updateUserDto);

    }

    @Delete(':id')
    async deleteUser(@Param('id') id: string) {
        const isValidId = mongoose.Types.ObjectId.isValid(id);
        if (!isValidId) throw new HttpException('Invalid ID', 404);

        const deletedUser = await this.usersService.deleteUser(id);
        if (!deletedUser) throw new HttpException('User not found', 404);
        return;
    }
}