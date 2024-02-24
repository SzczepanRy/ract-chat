import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GroupDto {
  @IsEmail()
  @IsNotEmpty()
  id: Number;

  @IsString()
  @IsNotEmpty()
  groupname: string;
}
