import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { User } from './user.entity';
import { Repository } from "typeorm";
import { UserDto } from './dos/user.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private readonly userRepo: Repository<User>) { }

    createUser(user: UserDto) {
        const newUser = this.userRepo.create(user);
        return this.userRepo.save(newUser);
    }

    async findOne(id: number) {
        return this.userRepo.findOne({
            where: { id }
        })
    }

    async findUserByEmail(email: string) {
        return this.userRepo.findOne({
            where: { email }
        })
    }

    async verifyUser(email: string, password: string) {
        return this.userRepo.findOne({
            where: { email, password }
        })
    }
}
