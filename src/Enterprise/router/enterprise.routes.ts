import {Router} from 'express';
import {create} from '../controller/enterprise.controller';
const router = Router();

router.post('/', create);
// router.get('/', findAll);
// router.put('/',update);
// router.get('/:_id',findById);
// router.delete('/',nullify);
// router.put('/activate',activate);



export default router;