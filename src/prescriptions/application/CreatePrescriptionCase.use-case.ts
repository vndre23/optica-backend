
import { DtoRequestPrescription, Prescription } from "../domain";
import { PrescriptionRepository } from "../domain/prescriptions.repository";


export class CreatePrescriptionCase{
    private repository: PrescriptionRepository;

    constructor(_repository:PrescriptionRepository){
        this.repository = _repository;
    }

    public async exec(params: DtoRequestPrescription):Promise<Prescription>{
        return await this._exec(params);
    }

    private async _exec(params: DtoRequestPrescription):Promise<Prescription>{
        return await this.repository.create(params);
    }
}