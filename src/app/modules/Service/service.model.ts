import { Schema, model } from 'mongoose';
import { TService } from './service.interface';

const serviceSchema = new Schema<TService>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    feature1: { type: String, required: true },
    feature2: { type: String, required: true },
    feature3: { type: String, required: true },
    feature4: { type: String, required: true },
    feature5: { type: String, required: true },
    description: { type: String, required: true },
    photo: { type: String, required: true },
    turnAroundTime: { type: String, required: true },
    frontendTech1: { type: String, required: true },
    frontendTech2: { type: String, required: true },
    frontendTech3: { type: String, required: true },
    frontendTech4: { type: String, required: true },
    frontendTech5: { type: String, required: true },
    frontendTech6: { type: String, required: true },
    backEndTech1: { type: String, required: true },
    backEndTech2: { type: String, required: true },
    backEndTech3: { type: String, required: true },
    backEndTech4: { type: String, required: true },
    backEndTech5: { type: String, required: true },
    backEndTech6: { type: String, required: true },
    database1: { type: String, required: true },
    database2: { type: String, required: true },
    database3: { type: String, required: true },
    database4: { type: String, required: true },
    database5: { type: String, required: true },
    database6: { type: String, required: true },
    relevantWorkSample1: { type: String, required: true },
    relevantWorkSample2: { type: String, required: true },
    relevantWorkSample3: { type: String, required: true },
    availability: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Service = model<TService>('Service', serviceSchema);
