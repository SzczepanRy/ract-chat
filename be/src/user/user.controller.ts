import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from 'src/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('add')
  addUser(
    @Body()
    {
      login,
      password,
      groupname,
    }: {
      login: string;
      password: string;
      groupname: string;
    },
  ): Promise<UserDto | { message: string }> {
    return this.userService.addUser(login, password, groupname);
  }

  @Post('findUsersByGroup')
  findUsersByGroup(
    @Body() { groupname }: { groupname: string },
  ): Promise<UserDto[] | { message: string }> {
    return this.userService.findUserByGroup(groupname);
  }
}
