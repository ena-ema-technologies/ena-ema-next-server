import { z } from 'zod';

export const TQuerySchema = z.object({
  fullName: z.string().nonempty('Name number is required'),
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  phone: z.string().nonempty('Phone number is required'),
  ContactMethod: z.string().nonempty('Contact method is required'),
  budget: z.number().positive('please enter positive number only'),
  currency: z.string().nonempty('Currency is required'),
  companyName: z.string().nonempty('Company name is required'),
  website: z.string().optional(),
  facebookPage: z.string().optional(),
  inspirationWebsite: z.string().optional(),
  serviceOrProduct: z.string().nonempty('Service or product is required'),
  location: z.string().nonempty('Location is required'),
  language: z.string().nonempty('Languages is required'),
  subject: z.string().nonempty('Subject Line is required'),
  clientMessages: z.string().nonempty('Please write your query'),
  mark: z.boolean(),
});
