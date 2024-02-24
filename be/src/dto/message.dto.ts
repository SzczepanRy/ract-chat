import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  id: Number;

  @IsString()
  @IsNotEmpty()
  message: string;

  // @IsString()
  // @IsNotEmpty()
  // password: string;

  // @IsString()
  // @IsNotEmpty()
  // groupId: Number;

  // @IsString()
  // @IsNotEmpty()
  // login: string;
}
