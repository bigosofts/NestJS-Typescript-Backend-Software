import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Req,
  Headers,
  Ip,
} from '@nestjs/common';

import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  public getAllUsers() {
    return 'Fetching all users';
  }

  @Get('/:id/:nid')
  public getUsers(@Param('id') param: string, @Query('name') query: string) {
    console.log(param);
    console.log(query);
    return `Fetching user with id: ${param}`;
  }
  @Post()
  public createUsers(
    @Body() body: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    console.log(body);
    console.log(headers);
    console.log(ip);
    return 'I am limon from post request';
  }
}
