import express from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';
import { PreviousWorkController } from './previousWork.controller';

const router = express.Router();

router.post(
  '/create-previous-work',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  PreviousWorkController.createPreviousWork,
);

router.get(
  '/',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  PreviousWorkController.getAllPreviousWork,
);

router.get(
  '/:id',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  PreviousWorkController.getSinglePreviousWork,
);

router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  PreviousWorkController.deletePreviousWork,
);

export const PreviousWorkRoutes = router;
