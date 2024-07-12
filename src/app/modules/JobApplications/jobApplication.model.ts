import { Schema, model } from 'mongoose';
import { TJobApplication } from './jobApplication.interface';

const jobApplicationSchema = new Schema<TJobApplication>(
  {
    applicantName: { type: String, required: true },
    applicantEmail: { type: String, required: true, unique: true },
    applicantPhone: { type: String, required: true, unique: true },
    resumeLink: { type: String, required: true },
    linkedInProfile: { type: String, required: false },
    facebookProfile: { type: String, required: false },
    portfolioLink: { type: String, required: true },
    githubProfile: { type: String, required: true },
    expectedSalary: { type: Number, required: true },
    currency: { type: String, required: true },
    currentCompany: { type: String, required: false },
    availableByDate: { type: Date, required: false },
    education: { type: String, required: false },
    skills: { type: String, required: false },
    workExperience: { type: String, required: true },
    preferredWorkingHours: { type: String, required: true },
    applicationSource: { type: String, required: true },
    reasonWeHireYou: { type: String, required: true },
    mark: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const JobApplication = model<TJobApplication>('JobApplication', jobApplicationSchema);
