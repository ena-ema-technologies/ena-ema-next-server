import express from 'express';
import { JobApplicationController } from './jobApplication.controller';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post('/submit-job-application', JobApplicationController.submitJobApplication);

router.get('/', auth(USER_ROLE.superAdmin, USER_ROLE.admin), JobApplicationController.getAllJobApplication);

router.get('/marked', auth(USER_ROLE.superAdmin, USER_ROLE.admin), JobApplicationController.getMarkedJobApplication);

router.get('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), JobApplicationController.getSingleJobApplication);

router.patch('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), JobApplicationController.updateJobApplication);

router.delete('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), JobApplicationController.deleteJobApplication);

export const JobApplicationRoutes = router;
