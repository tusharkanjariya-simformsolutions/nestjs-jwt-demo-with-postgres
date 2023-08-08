import { Controller, Post, Get, Body, Param, Query, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dos/user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post()
    createUser(@Body() body: UserDto) {
        return this.userService.createUser(body);
    }

    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    findUserByEmail(@Query() query) {
        return this.userService.findUserByEmail(query.email);
    }
}
