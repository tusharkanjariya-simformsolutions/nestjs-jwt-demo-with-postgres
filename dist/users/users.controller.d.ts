import { UsersService } from './users.service';
import { UserDto } from './dos/user.dto';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(body: UserDto): Promise<import("./user.entity").User>;
    findUser(id: string): Promise<import("./user.entity").User>;
    findUserByEmail(query: any): Promise<import("./user.entity").User>;
}
