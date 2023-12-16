import { DtoRequestUser, User } from "../domain";
import { UserRepository } from "../domain/user.repository";

export class CreateUseCase{
    private repository: UserRepository;

    constructor(_repository:UserRepository){
        this.repository = _repository;
    }

    public async exec(params: DtoRequestUser):Promise<User>{
        return await this._exec(params);
    }

    private async _exec(params: DtoRequestUser):Promise<User>{
        return await this.repository.create(params);
    }
}