import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { PreviousWorkServices } from './previousWork.service';

const createPreviousWork = catchAsync(async (req, res) => {
  const newPreviousWork = req.body;
  const result = await PreviousWorkServices.createPreviousWorkIntoDB(newPreviousWork);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Previous Works Created successfully',
    data: result,
  });
});

const getAllPreviousWork = catchAsync(async (req, res) => {
  const result = await PreviousWorkServices.getAllPreviousWorkFromDB();
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Previous Works retrieved successfully',
    data: result,
  });
});

const getSinglePreviousWork = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PreviousWorkServices.getSinglePreviousWorkFromDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'This is the Previous Works you are looking for',
    data: result,
  });
});

const deletePreviousWork = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PreviousWorkServices.deletePreviousWorkFromDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Previous Works deleted successfully',
    data: result,
  });
});

export const PreviousWorkController = {
  createPreviousWork,
  getAllPreviousWork,
  getSinglePreviousWork,
  deletePreviousWork,
};
