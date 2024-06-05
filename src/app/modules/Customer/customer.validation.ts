import { z } from 'zod';

export const createCustomerValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20).optional(),
    customer: z.object({
      name: z.string().optional(),
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyContactNo: z.string(),
      presentAddress: z.string(),
    }),
  }),
});

export const updateCustomerValidationSchema = z.object({
  body: z.object({
    customer: z.object({
      name: z.string().optional(),
      gender: z.enum(['male', 'female', 'other']).optional(),
      dateOfBirth: z.string().optional(),
      email: z.string().email().optional(),
      contactNo: z.string().optional(),
      emergencyContactNo: z.string().optional(),
      bloogGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string().optional(),
      admissionSemester: z.string().optional(),
      academicDepartment: z.string().optional(),
    }),
  }),
});

export const customerValidations = {
  createCustomerValidationSchema,
  updateCustomerValidationSchema,
};
