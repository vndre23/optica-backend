
import { Prescription } from "../domain";
import { PrescriptionRepository } from "../domain/prescriptions.repository";


export class FindAllCustomerCase{
    private repository: PrescriptionRepository;

    constructor(_repository:PrescriptionRepository){
        this.repository = _repository;
    }

    public async exec():Promise<Prescription[]>{
        return await this._exec();
    }

    private async _exec():Promise<Prescription[]>{
        return await this.repository.findAll();
    }
}