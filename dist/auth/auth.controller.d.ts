import { AuthService } from './auth.service';
import AuthCredentialsDto from './dto/auth-credentials.dto';
import RegisterUserDto from './dto/register-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signUp(registerUserDto: RegisterUserDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
