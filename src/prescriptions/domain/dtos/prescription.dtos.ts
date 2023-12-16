import {Customer} from '../../../customers/domain';
export interface DtoRequestPrescription{
    
    emisionDate: Date;
    customer: Customer;
    far: IFarAndNear;
    near: IFarAndNear;
    dip: number;
    observations: string;
    status?: Status;
    enterprise:{
        numberDocument:string,
        businessName:string
    };
}

interface Status{
    code: number;
    name: string;
}

interface IDetail{
    esf: number;
    cil: number;
    eje: number;
}
interface IFarAndNear{
    right: IDetail;
    left: IDetail;
}