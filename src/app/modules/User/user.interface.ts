/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type userSearchFilter = {
  searchTerm?: string | undefined;
  email: string;
};

export interface TUser {
  id: string;
  name: string;
  email: string;
  password: string;
  gender: string;
  needsPasswordChange: boolean;
  role: 'superAdmin' | 'admin' | 'customer';
  emergencyContactNo: string;
  presentAddress: string;
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
  passwordChangedAt: Date;
}

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByCustomId(id: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
