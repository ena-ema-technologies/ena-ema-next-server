import express from 'express';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post('/create-service', auth(USER_ROLE.superAdmin, USER_ROLE.admin), ServiceController.createService);

router.get(
  '/',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ServiceController.getAllService,
);

router.get(
  '/:id',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ServiceController.getSingleService,
);

router.delete('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), ServiceController.deleteService);

export const ServiceRoutes = router;
