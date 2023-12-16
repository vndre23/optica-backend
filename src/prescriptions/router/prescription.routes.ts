import {Router} from 'express';
import {activate, create, findAll, findById, nullify, update} from '../controller/prescription.controller';
import { validarJWT } from '../../middlewares/validarJWT';
const router = Router();

router.post('/',validarJWT, create);
router.get('/',validarJWT, findAll);
router.put('/',validarJWT,update);
router.get('/:_id',validarJWT,findById);
router.delete('/',validarJWT,nullify);
router.put('/activate',validarJWT,activate);



export default router;