import { Model } from 'mongoose';

export type TCustomer = {
  name: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  presentAddress: string;
  profileImg?: string;
  isDeleted: boolean;
};

//for creating static
export interface CustomerModel extends Model<TCustomer> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(id: string): Promise<TCustomer | null>;
}
