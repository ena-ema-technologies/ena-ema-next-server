export interface TJobApplication {
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  resumeLink: string;
  linkedInProfile?: string;
  facebookProfile?: string;
  portfolioLink: string;
  githubProfile: string;
  expectedSalary: number;
  currency: string;
  currentCompany?: string;
  availableByDate?: string;
  education?: string;
  skills?: string;
  workExperience: string;
  preferredWorkingHours: string;
  applicationSource: string;
  reasonWeHireYou: string;
  mark: boolean;
}
