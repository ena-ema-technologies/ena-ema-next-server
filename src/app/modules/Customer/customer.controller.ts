import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CustomerServices } from './customer.service';

const getSingleCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerServices.getSingleCustomerFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer is retrieved successfully',
    data: result,
  });
});

const getAllCustomers: RequestHandler = catchAsync(async (req, res) => {
  const result = await CustomerServices.getAllCustomersFromDB(req.query);
  // console.log({ result });
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer are retrieved successfully',
    meta: result.meta,
    data: result.result,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { customer } = req.body;
  const result = await CustomerServices.updateCustomerIntoDB(id, customer);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer is updated successfully',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CustomerServices.deleteCustomerFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer is deleted successfully',
    data: result,
  });
});

export const CustomerControllers = {
  getAllCustomers,
  getSingleCustomer,
  deleteCustomer,
  updateCustomer,
};
