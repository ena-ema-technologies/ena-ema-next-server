import express from 'express';
import { QueryController } from './query.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post('/create-query', QueryController.createQuery);

router.get('/', auth(USER_ROLE.superAdmin, USER_ROLE.admin), QueryController.getAllQuery);

router.get('/marked', auth(USER_ROLE.superAdmin, USER_ROLE.admin), QueryController.getMarkedQuery);

router.get('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), QueryController.getSingleQuery);

router.patch('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), QueryController.updateQuery);
router.delete('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), QueryController.deleteQuery);

export const QueryRoutes = router;
