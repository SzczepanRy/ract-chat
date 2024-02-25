import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class MessageDto {
  @IsNotEmpty()
  id: Number;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  // @IsString()
  // @IsNotEmpty()
  // groupId: Number;

  // @IsString()
  // @IsNotEmpty()
  // login: string;
}
