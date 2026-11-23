
import { RolesGuard } from './roles.guard.js';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { User } from './user.entity.js';
import { JwtAuthGuard } from './jwt-auth/jwt-auth.guard.js';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.getOrThrow<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1h' },
      }),
    }),
  ],
  controllers: [AuthController],
providers: [AuthService, JwtAuthGuard, RolesGuard],
exports: [JwtModule, JwtAuthGuard, RolesGuard],
})
export class AuthModule {}
