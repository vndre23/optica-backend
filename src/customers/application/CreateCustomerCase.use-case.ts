import { DtoRequestCustomer } from "../domain/dtos/customer.dtos";
import { Customer } from "../domain/entities/customer.entity";
import { CustomerRepository } from "../domain/customer.repository";


export class CreateCustomerUseCase{
    private repository: CustomerRepository;

    constructor(_repository:CustomerRepository){
        this.repository = _repository;
    }

    public async exec(params: DtoRequestCustomer):Promise<Customer>{
        return await this._exec(params);
    }

    private async _exec(params: DtoRequestCustomer):Promise<Customer>{
        return await this.repository.create(params);
    }
}