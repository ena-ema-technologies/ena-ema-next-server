import { Schema, model } from 'mongoose';
import { TTeam } from './team.interface';
const teamSchema = new Schema<TTeam>(
  {
    name: { type: String, required: true },
    designation: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    education: { type: String, required: true },
    address: { type: String, required: true },
    linkedInProfile: { type: String, required: true },
    facebookProfile: { type: String, required: true },
    twitterProfile: { type: String, required: true },
    profilePhoto: { type: String, required: true },
    startDate: { type: String, required: true },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const Team = model<TTeam>('Team', teamSchema);
