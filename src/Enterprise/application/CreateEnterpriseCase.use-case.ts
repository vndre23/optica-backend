

import { DtoRequestEnterprise, Enterprise } from "../domain";
import { EnterpriseRepository } from "../domain/enterprise.repository";



export class CreateEnterpriseCase{
    private repository: EnterpriseRepository;

    constructor(_repository:EnterpriseRepository){
        this.repository = _repository;
    }

    public async exec(params: DtoRequestEnterprise):Promise<Enterprise>{
        return await this._exec(params);
    }

    private async _exec(params: DtoRequestEnterprise):Promise<Enterprise>{
        return await this.repository.create(params);
    }
}