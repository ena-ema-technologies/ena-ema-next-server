import express from 'express';
import auth from '../../middlewares/auth';
import { ReviewController } from './review.controller';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

router.post(
  '/submit-review',
  //   auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  ReviewController.createReview,
);

router.get(
  '/',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin), TODO
  ReviewController.getAllReview,
);

router.get('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), ReviewController.getSingleReview);

router.delete('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), ReviewController.deleteReview);

export const ReviewRoutes = router;
