import {Router,Express} from 'express';
import CustomerRouter from './customers/router/customer.routes';
import GendersRouter from './general/router/gender.routes';
import TypeDocument from './general/router/typeDocument.routes';
import UsersRouter from './users/router/users.routes';
import PrescriptionsRouter from './prescriptions/router/prescription.routes';
import AccessRouter from './general/router/access.routes';
import jobsRouter from './users/router/job.routes';
import EnterpriseRouter from './Enterprise/router/enterprise.routes';
const router=Router();

export const routerApi = (app:Express) =>{
    app.use('/api/v1', router);

    router.use('/customers',CustomerRouter);
    router.use('/genders', GendersRouter);
    router.use('/type-document', TypeDocument);
    router.use('/users',UsersRouter );
    router.use('/prescriptions', PrescriptionsRouter);
    router.use('/access', AccessRouter);
    router.use('/jobs', jobsRouter);
    router.use('/enterprise', EnterpriseRouter);
}