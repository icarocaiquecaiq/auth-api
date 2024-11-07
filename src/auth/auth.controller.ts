import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import  AuthCredentialsDto  from './dto/auth-credentials.dto';
import  RegisterUserDto  from './dto/register-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  async signUp(@Body() registerUserDto: RegisterUserDto): Promise<void> {
    return this.authService.signUp(registerUserDto);
  }

  @Post('/signin')
  async signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}