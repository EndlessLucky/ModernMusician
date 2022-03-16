import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  
  readonly username?: string;
  
  // @IsNotEmpty()
  // readonly password: string;

  @IsNotEmpty()
  readonly address: string;
}
