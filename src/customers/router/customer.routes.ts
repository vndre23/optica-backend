import {Router} from 'express';
import {create, findAll, findById, update} from '../controller/customer.controller';
import { validarJWT } from '../../middlewares/validarJWT';
const router = Router();

router.post('/',validarJWT, create);
router.get('/',validarJWT, findAll);
router.put('/',validarJWT,update);
router.get('/:_id',validarJWT,findById);



export default router;