import { Router } from 'express';
import { AdminRoutes } from '../modules/Admin/admin.route';
import { AuthRoutes } from '../modules/Auth/auth.route';
import { CustomerRoutes } from '../modules/Customer/customer.route';
import { UserRoutes } from '../modules/User/user.route';
import { QueryRoutes } from '../modules/Queries/query.routes';
import { ReviewRoutes } from '../modules/Review/review.route';
import { ServiceRoutes } from '../modules/Service/service.route';
import { TeamRoutes } from '../modules/Team/team.route';
import { HiringPostRoutes } from '../modules/HiringPost/hiringPost.route';
import { JobApplicationRoutes } from '../modules/JobApplications/jobApplication.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/customers',
    route: CustomerRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/hiring',
    route: HiringPostRoutes,
  },
  {
    path: '/job-applications',
    route: JobApplicationRoutes,
  },
  {
    path: '/queries',
    route: QueryRoutes,
  },
  {
    path: '/reviews',
    route: ReviewRoutes,
  },
  {
    path: '/services',
    route: ServiceRoutes,
  },
  {
    path: '/our-team',
    route: TeamRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
