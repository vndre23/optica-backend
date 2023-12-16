import {Router} from 'express';
import {create, findAll, update} from '../controllers/jobs.controller';
const router = Router();

router.post('/', create);
router.get('/', findAll);
router.put('/', update);

export default router;