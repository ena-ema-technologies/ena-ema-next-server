import { Schema, model } from 'mongoose';
import { THiring } from './hiringPost.interface';

const hiringSchema = new Schema<THiring>(
  {
    title: { type: String, required: true },
    hiringImage: { type: String, required: true },
    jobNature: { type: String, required: true },
    workingHours: { type: String, required: true },
    workingDays: { type: String, required: true },
    description: { type: String, required: true },
    minSalary: { type: Number, required: true },
    maxSalary: { type: Number, required: true },
    currency: { type: String, required: true },
    location: { type: String, required: true },
    requirements: { type: String, required: true },
    experience: { type: String, required: true },
    benefits1: { type: String, required: true },
    benefits2: { type: String, required: true },
    benefits3: { type: String, required: true },
    benefits4: { type: String, required: true },
    benefits5: { type: String, required: true },
    benefits6: { type: String, required: true },
    benefits7: { type: String, required: true },
    benefits8: { type: String, required: true },
    benefits9: { type: String, required: true },
    benefits10: { type: String, required: true },
    companyName: { type: String, required: true },
    responsibilities1: { type: String, required: true },
    responsibilities2: { type: String, required: true },
    responsibilities3: { type: String, required: true },
    responsibilities4: { type: String, required: true },
    responsibilities5: { type: String, required: true },
    responsibilities6: { type: String, required: true },
    InterviewRd1: { type: String, required: true },
    InterviewRd2: { type: String, required: true },
    InterviewRd3: { type: String, required: true },
    applicationDeadline: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Hiring = model<THiring>('Hiring', hiringSchema);
