import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstands } from './constants';

@Module({
  imports: [UsersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstands.secret,
      signOptions: { expiresIn: '3600s' }
    })],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule { }
