import { Repository } from 'typeorm';
import { User } from './user.entity';
import 'dotenv/config';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepository;
    constructor(userRepository: Repository<User>);
    validate(payload: {
        username: string;
    }): Promise<User>;
}
export {};
