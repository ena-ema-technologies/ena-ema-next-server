import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { HiringPostServices } from './hiringPost.service';

const createHiringPost = catchAsync(async (req, res) => {
  const newHiring = req.body;
  const result = await HiringPostServices.createHiringPostIntoDB(newHiring);
  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Hiring post created successfully',
    data: result,
  });
});

const getAllHiringPost = catchAsync(async (req, res) => {
  const result = await HiringPostServices.getAllHiringPostFromDB();
  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Hiring post retrieved successfully',
    data: result,
  });
});

const getSingleHiringPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await HiringPostServices.getSingleHiringPostFromDB(id);
  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Hiring post You are looking for',
    data: result,
  });
});

const deleteHiringPost = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await HiringPostServices.deleteHiringPostFromDB(id);
  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Hiring post deleted Successfully',
    data: result,
  });
});

export const HiringPostController = {
  createHiringPost,
  getAllHiringPost,
  getSingleHiringPost,
  deleteHiringPost,
};
