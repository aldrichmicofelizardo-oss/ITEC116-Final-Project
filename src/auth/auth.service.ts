
import {
  Injectable,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity.js';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async register(data: {
    username: string;
    email: string;
    password: string;
  }) {
    if (!data.username || !data.email || !data.password) {
      throw new ConflictException('All fields are required');
    }

    const existingUser = await this.usersRepository.findOne({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = this.usersRepository.create({
      username: data.username,
      email: data.email,
      password: hashedPassword,
      role: 'user',
    });

    const savedUser = await this.usersRepository.save(user);

    return {
      message: 'Registration successful',
      id: savedUser.id,
      username: savedUser.username,
      email: savedUser.email,
    };
  }

  async login(data: { email: string; password: string }) {
    const user = await this.usersRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email: data.email })
      .getOne();

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await bcrypt.compare(
      data.password,
      user.password,
    );

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.jwtService.signAsync({
      sub: user.id,
      email: user.email,
      role: user.role,
    });

    return {
      message: 'Login successful',
      access_token: token,
    };
  }
}
