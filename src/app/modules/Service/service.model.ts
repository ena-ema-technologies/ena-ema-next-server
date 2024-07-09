import { Schema, model } from 'mongoose';
import { TService } from './service.interface';

const serviceSchema = new Schema<TService>(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    photo: { type: String, required: true },
    currency: { type: String, required: true },

    database1: { type: String, required: true },
    database2: { type: String, required: true },
    database3: { type: String },
    database4: { type: String },
    database5: { type: String },

    description: { type: String, required: true },
    availability: { type: String, required: true },

    backEndTech1: { type: String, required: true },
    backEndTech2: { type: String, required: true },
    backEndTech3: { type: String, required: true },
    backEndTech4: { type: String },
    backEndTech5: { type: String },
    backEndTech6: { type: String },

    turnAroundTime: { type: String, required: true },

    frontendTech1: { type: String, required: true },
    frontendTech2: { type: String, required: true },
    frontendTech3: { type: String, required: true },
    frontendTech4: { type: String, required: true },
    frontendTech5: { type: String },
    frontendTech6: { type: String },

    websiteFeature1: { type: String, required: true },
    websiteFeature2: { type: String, required: true },
    websiteFeature3: { type: String, required: true },
    websiteFeature4: { type: String, required: true },
    websiteFeature5: { type: String, required: true },
    websiteFeature6: { type: String, required: true },
    websiteFeature7: { type: String, required: true },
    websiteFeature8: { type: String, required: true },
    websiteFeature9: { type: String, required: true },
    websiteFeature10: { type: String, required: true },
    websiteFeature11: { type: String },
    websiteFeature12: { type: String },
    websiteFeature13: { type: String },
    websiteFeature14: { type: String },
    websiteFeature15: { type: String },

    securityFeatures1: { type: String, required: true },
    securityFeatures2: { type: String, required: true },
    securityFeatures3: { type: String, required: true },
    securityFeatures4: { type: String, required: true },
    securityFeatures5: { type: String, required: true },
    securityFeatures6: { type: String, required: true },
    securityFeatures7: { type: String, required: true },
    securityFeatures8: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export const Service = model<TService>('Service', serviceSchema);
