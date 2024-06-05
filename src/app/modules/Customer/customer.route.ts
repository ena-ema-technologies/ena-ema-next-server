import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../User/user.constant';
import { CustomerControllers } from './customer.controller';
import { updateCustomerValidationSchema } from './customer.validation';

const router = express.Router();

router.get(
  '/',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  CustomerControllers.getAllCustomers,
);

router.get(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  CustomerControllers.getSingleCustomer,
);

router.patch(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  validateRequest(updateCustomerValidationSchema),
  CustomerControllers.updateCustomer,
);

router.delete(
  '/:id',
  auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  CustomerControllers.deleteCustomer,
);

export const CustomerRoutes = router;
