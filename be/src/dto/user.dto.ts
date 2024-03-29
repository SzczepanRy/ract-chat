import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  id: Number;

  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  // @IsString()
  // @IsNotEmpty()
  // groupId: Number;

  // @IsString()
  // @IsNotEmpty()
  // login: string;
}
