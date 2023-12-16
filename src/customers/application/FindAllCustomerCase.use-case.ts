import { DtoRequestCustomer } from "../domain/dtos/customer.dtos";
import { Customer } from "../domain/entities/customer.entity";
import { CustomerRepository } from "../domain/customer.repository";


export class FindAllCustomerCase{
    private repository: CustomerRepository;

    constructor(_repository:CustomerRepository){
        this.repository = _repository;
    }

    public async exec():Promise<Customer[]>{
        return await this._exec();
    }

    private async _exec():Promise<Customer[]>{
        return await this.repository.findAll();
    }
}