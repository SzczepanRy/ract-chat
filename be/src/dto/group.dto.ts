import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GroupDto {
  @IsNotEmpty()
  id: Number;

  @IsString()
  @IsNotEmpty()
  groupname: string;
}
