import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  create(id: string, pw: string, name: string, school: string, type: string) {
    return { message: "create successful" };
  }

  findAll() {
    return `This action returns all users`;
  }
}
