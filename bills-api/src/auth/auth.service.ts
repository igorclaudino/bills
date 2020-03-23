import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository, QueryFailedError } from 'typeorm';
import { RecordAlreadyExistsException } from 'src/exceptions/record.already.exists';
import * as bcrypt from 'bcryptjs';
import { RecordNotFoundException } from 'src/exceptions/record.not.found';
import { JwtService } from '@nestjs/jwt';

export interface LoggedUser {
  user: User;
  token: string;
}

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(user: User): Promise<User> {
    try {
      user = User.getValidInstance(user);
      return await this.usersRepository.save(user);
    } catch (err) {
      if (err instanceof QueryFailedError) {
        throw new RecordAlreadyExistsException(user.email);
      } else {
        throw new HttpException(
          'Server error',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  }

  async login(email: string, password: string): Promise<LoggedUser> {
    const users: User[] = await this.usersRepository.find({
      where: {
        email,
      },
    });

    if (users.length == 0) throw new RecordNotFoundException(email);

    const user: User = users[0];

    if (!(await bcrypt.compare(password, user.password)))
      throw new HttpException(
        'E-mail or password incorrect',
        HttpStatus.UNAUTHORIZED,
      );

    return {
      user,
      token: await this.jwtService.signAsync({
        username: user.email,
        sub: user.id,
      }),
    };
  }
}
