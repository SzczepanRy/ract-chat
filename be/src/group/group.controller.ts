import { Body, Controller, Post } from '@nestjs/common';
import { GroupService } from './group.service';
import { GroupDto } from 'src/dto/group.dto';

@Controller('group')
export class GroupController {
  constructor(private groupService: GroupService) {}

  @Post('/add')
  addGroup(
    @Body() { groupname }: { groupname: string },
  ): Promise<GroupDto | { message: string }> {
    return this.groupService.addGroup(groupname);
  }

  @Post('/findGroupsByLogin')
  findGroupByUser(
    @Body() { login }: { login: string },
  ): Promise<GroupDto[] | { message: string }> {
    return this.groupService.findGroupsByUser(login);
  }
}
