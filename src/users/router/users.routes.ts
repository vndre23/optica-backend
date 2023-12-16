import {Router} from 'express';
import {addPermisos, changePassword, create, findAll, login, refreshToken, update} from '../controllers/users.controller';
import {validarJWT} from '../../middlewares/validarJWT';
const router = Router();

router.post('/',validarJWT, create);
router.get('/',validarJWT, findAll);
router.put('/',validarJWT, update);
router.post('/add-permisos',validarJWT, addPermisos)
router.post('/change-password',validarJWT, changePassword);
router.post('/login', login);
router.get('/refreshToken',validarJWT, refreshToken);


export default router;