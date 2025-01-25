import { Controller, Get, Post, Patch, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'I am limon from get request';
  }
  @Post()
  public createUsers() {
    return 'I am limon from post request';
  }
}
