
export interface Enterprise{
    _id?:string;
    numberDocument:string;
    businessName:string;
    email:string;
    phone:string;
    address:string;
    status:Status;
}

interface Status{
    code: number;
    name: string;
}
