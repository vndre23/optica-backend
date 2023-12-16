import {Router} from 'express';
import {findAll, generate} from '../controller/genders.controller';
const router = Router();

router.post('/generate', generate);
router.get('/',findAll);


export default router;