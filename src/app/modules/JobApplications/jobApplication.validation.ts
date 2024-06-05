import { z } from 'zod';

const jobApplicationSchema = z.object({
  applicantName: z.string().nonempty('Applicant name is required'),
  applicantEmail: z
    .string()
    .email('Invalid email format')
    .nonempty('Applicant email is required'),
  applicantPhone: z.string().nonempty('Applicant phone number is required'),
  resumeLink: z
    .string()
    .url('Invalid URL format')
    .nonempty('Resume link is required'),
  linkedInProfile: z.string().url('Invalid URL format').optional(),
  facebookProfile: z.string().url('Invalid URL format').optional(),
  portfolioLink: z
    .string()
    .url('Invalid URL format')
    .nonempty('Portfolio link is required'),
  githubProfile: z
    .string()
    .url('Invalid URL format')
    .nonempty('GitHub profile is required'),
  expectedSalary: z
    .number()
    .positive('Expected salary must be a positive number'),
  currency: z.string().nonempty('Currency is required'),
  currentCompany: z.string().optional(),
  availableByDate: z.date().optional(),
  education: z.string().optional(),
  skills: z.string().optional(),
  workExperience: z.string().nonempty('Work experience is required'),
  preferredWorkingHours: z
    .string()
    .nonempty('desired working hours is required'),
  applicationSource: z.string().nonempty('Application source is required'),
  reasonWeHireYou: z.string().nonempty('Reason we should hire you is required'),
});

export { jobApplicationSchema };
