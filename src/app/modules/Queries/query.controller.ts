import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { QueryServices } from './query.service';

const createQuery = catchAsync(async (req, res) => {
  const newQuery = req.body;
  const result = await QueryServices.createQueryIntoDB(newQuery);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Query send successfully',
    data: result,
  });
});

const getAllQuery = catchAsync(async (req, res) => {
  const result = await QueryServices.getAllQueryFromDB();
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Queries retrieved successfully',
    data: result,
  });
});

const getMarkedQuery = catchAsync(async (req, res) => {
  const result = await QueryServices.getMarkedQueryFromDB();
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Marked query retrieved successfully',
    data: result,
  });
});

const getSingleQuery = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await QueryServices.getSingleQueryFromDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Query you are looking for!',
    data: result,
  });
});

const updateQuery = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await QueryServices.updateQueryFromDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Query updated successfully',
    data: result,
  });
});

const deleteQuery = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await QueryServices.deleteQueryFromDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Query deleted successfully',
    data: result,
  });
});

export const QueryController = {
  createQuery,
  getAllQuery,
  getSingleQuery,
  updateQuery,
  getMarkedQuery,
  deleteQuery,
};
