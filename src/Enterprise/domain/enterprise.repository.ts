import { DtoRequestEnterprise } from "./dtos/enterprise.dtos"
import { Enterprise } from "./entities/enterprise.entity"




export interface EnterpriseRepository {
    create(params:DtoRequestEnterprise): Promise<Enterprise>
    findAll(): Promise<Enterprise[]>
    findById(params:string): Promise<Enterprise>
}