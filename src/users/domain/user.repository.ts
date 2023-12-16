import { DtoRequestLogin } from "./dtos/login.dtos";
import { DtoRequestUser } from "./dtos/user.dtos";
import { User } from "./entities/user.entity";

export interface UserRepository {
    create(params:DtoRequestUser): Promise<User>
    login(params:DtoRequestLogin): Promise<User>
}