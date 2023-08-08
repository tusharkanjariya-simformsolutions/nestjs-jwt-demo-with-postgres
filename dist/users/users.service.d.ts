import { User } from './user.entity';
import { Repository } from "typeorm";
import { UserDto } from './dos/user.dto';
export declare class UsersService {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    createUser(user: UserDto): Promise<User>;
    findOne(id: number): Promise<User>;
    findUserByEmail(email: string): Promise<User>;
    verifyUser(email: string, password: string): Promise<User>;
}
