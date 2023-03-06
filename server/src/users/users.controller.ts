import {Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get('create')
  create(
      @Query('id') id: string,
      @Query('pw') pw: string,
      @Query('name') name: string,
      @Query('school') school: string,
      @Query('type') type: string
  ) {
    return this.usersService.create(id, pw, name, school, type)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }
}