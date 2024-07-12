import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { HiringPostController } from './hiringPost.controller';

const router = express.Router();

router.post('/create-hiring-post', auth(USER_ROLE.superAdmin), HiringPostController.createHiringPost);

router.get('/', auth(USER_ROLE.superAdmin), HiringPostController.getAllHiringPost);

router.get('/:id', auth(USER_ROLE.superAdmin), HiringPostController.getSingleHiringPost);

router.delete('/:id', auth(USER_ROLE.superAdmin), HiringPostController.deleteHiringPost);

export const HiringPostRoutes = router;
