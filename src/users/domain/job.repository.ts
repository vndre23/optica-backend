import { DtoRequestJob } from "./dtos/job.dtos";

import { Job } from "./entities/job.entity";


export interface JobRepository {
    create(params:DtoRequestJob): Promise<Job>
    findAll(): Promise<Job>
}