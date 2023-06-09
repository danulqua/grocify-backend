import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @Length(8, 30, {
    message: 'password length must be between 8 and 30 characters',
  })
  password: string;

  @ApiProperty({ enum: ['USER', 'ADMIN'] })
  @IsEnum(UserRole)
  role: UserRole;
}
