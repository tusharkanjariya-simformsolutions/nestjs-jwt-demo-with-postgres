import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async signIn(email: string, pass: string) {
        const user = await this.userService.findUserByEmail(email);
        if (user.password !== pass) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, email: user.email };
        return {
            access_toekn: await this.jwtService.signAsync(payload)
        }
    }
}
