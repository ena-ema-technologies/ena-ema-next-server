import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { JobApplicationServices } from './jobApplication.service';
import { Request, Response } from 'express';

const submitJobApplication = catchAsync(async (req: Request, res: Response) => {
  const newApplication = req.body;
  const result =
    await JobApplicationServices.submitJobApplicationIntoDB(newApplication);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Your application submitted successfully',
    data: result,
  });
});

const getAllJobApplication = catchAsync(async (req: Request, res: Response) => {
  const result = await JobApplicationServices.getAllJobApplicationFromDB();
  //send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Job Applications retrieved successfully',
    data: result,
  });
});

const getMarkedJobApplication = catchAsync(
  async (req: Request, res: Response) => {
    const result = await JobApplicationServices.getMarkedJobApplicationFromDB();
    //   send response
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Marked Job Application retrieved successfully',
      data: result,
    });
  },
);

const getSingleJobApplication = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result =
      await JobApplicationServices.getSingleJobApplicationFromDB(id);
    //   send response
    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: 'Job Application you are looking for!',
      data: result,
    });
  },
);

const updateJobApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await JobApplicationServices.updateJobApplicationFromDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Job Application updated successfully',
    data: result,
  });
});

const deleteJobApplication = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await JobApplicationServices.deleteJobApplicationFromDB(id);
  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Job Application deleted successfully',
    data: result,
  });
});

export const JobApplicationController = {
  submitJobApplication,
  getMarkedJobApplication,
  getAllJobApplication,
  getSingleJobApplication,
  updateJobApplication,
  deleteJobApplication,
};
