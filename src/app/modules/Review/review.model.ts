import { Schema, model } from 'mongoose';
import { TReview } from './review.interface';

const reviewSchema = new Schema<TReview>(
  {
    clientName: { type: String, required: true },
    comments: { type: String, required: true },
    clientOrganization: { type: String, required: true },
    clientDesignation: { type: String, required: true },
    starRating: { type: Number, required: true, min: 1, max: 5 },
    clientPhotoUrl: { type: String, required: true },
    clientCountry: { type: String, required: true },
    submissionDate: { type: Date, required: true, default: Date.now },
  },
  {
    timestamps: true,
  },
);

export const Review = model<TReview>('Review', reviewSchema);
