import { Schema, model } from 'mongoose';
import { TQuery } from './query.interface';

const querySchema = new Schema<TQuery>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    ContactMethod: { type: String, required: true },
    budget: { type: Number, required: true },
    currency: { type: String, required: true },
    companyName: { type: String, required: true },
    website: { type: String },
    facebookPage: { type: String },
    inspirationWebsite: { type: String },
    serviceOrProduct: { type: String, required: true },
    location: { type: String, required: true },
    language: { type: String, required: true },
    subject: { type: String, required: true },
    clientMessages: { type: String, required: true },
    mark: { type: Boolean, default: false },
  },

  {
    timestamps: true,
  },
);

export const Query = model<TQuery>('Query', querySchema);
