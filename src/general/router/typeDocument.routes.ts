import {Router} from 'express';
import {findAll, generate} from '../controller/typeDocuments.controller';
const router = Router();

router.post('/generate', generate);
router.get('/',findAll);


export default router;