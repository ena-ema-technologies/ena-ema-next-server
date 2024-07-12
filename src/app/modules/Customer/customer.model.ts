import { Schema, model } from 'mongoose';
import { CustomerModel, TCustomer } from './customer.interface';

const customerSchema = new Schema<TCustomer, CustomerModel>({
  name: { type: String, required: [true, 'Name is required'] },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not a valid gender',
    },
    required: [true, 'Gender is required'],
  },
  email: { type: String, required: [true, 'Email is required'] },

  contactNo: { type: String, required: [true, 'Contact number is required'] },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact number is required'],
  },
  presentAddress: { type: String, required: true },

  profileImg: { type: String, default: '' },

  isDeleted: { type: Boolean, default: false },
});

// Query Middleware
customerSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

customerSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

customerSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

//creating a custom static method
customerSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Customer.findOne({ id });
  return existingUser;
};

export const Customer = model<TCustomer, CustomerModel>('Customer', customerSchema);
