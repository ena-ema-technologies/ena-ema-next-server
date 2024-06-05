import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { TeamsService } from './team.service';

const createTeam = catchAsync(async (req, res) => {
  const teamsData = req.body;
  const result = await TeamsService.createTeamIntoDB(teamsData);

  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Team member created successfully',
    data: result,
  });
});

const getAllTeam = catchAsync(async (req, res) => {
  const result = await TeamsService.getAllTeamFromDB();

  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Team members retrieved successfully',
    data: result,
  });
});

const getSingleTeamMember = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TeamsService.getSingleTeamMemberFromDB(id);

  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Team member retrieved successfully',
    data: result,
  });
});

const deleteTeamMember = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TeamsService.deleteTeamMemberFromDB(id);

  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Team members deleted successfully',
    data: result,
  });
});
const updateTeamMember = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await TeamsService.updateTeamMemberFromDB(id, req.body);

  //   send response
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Team members updated successfully',
    data: result,
  });
});

export const TeamController = {
  createTeam,
  getAllTeam,
  deleteTeamMember,
  updateTeamMember,
  getSingleTeamMember,
};
