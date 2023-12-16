import { DtoRequestPrescription } from "./dtos/prescription.dtos";
import { Prescription } from "./entities/prescriptions.entity";


export interface PrescriptionRepository {
    create(params:DtoRequestPrescription): Promise<Prescription>
    findAll(): Promise<Prescription[]>
    findById(params:string): Promise<Prescription>
}