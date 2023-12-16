import { DtoRequestCustomer } from "./dtos/customer.dtos";
import { Customer } from "./entities/customer.entity";


export interface CustomerRepository {
    create(params:DtoRequestCustomer): Promise<Customer>
    findAll(): Promise<Customer[]>
}