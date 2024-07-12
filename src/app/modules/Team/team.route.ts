import express from 'express';
import auth from '../../middlewares/auth';
import { TeamController } from './team.controller';
import { USER_ROLE } from '../User/user.constant';

const router = express.Router();

// call controller function
router.post('/create-team-member', auth(USER_ROLE.superAdmin), TeamController.createTeam);

router.get(
  '/',
  // auth(USER_ROLE.superAdmin, USER_ROLE.admin),
  TeamController.getAllTeam,
);

router.get('/:id', auth(USER_ROLE.superAdmin, USER_ROLE.admin), TeamController.getSingleTeamMember);

router.delete('/:id', auth(USER_ROLE.superAdmin), TeamController.deleteTeamMember);

router.patch('/:id', auth(USER_ROLE.superAdmin), TeamController.updateTeamMember);

export const TeamRoutes = router;
