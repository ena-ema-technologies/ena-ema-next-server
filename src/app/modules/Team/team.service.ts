import { TTeam } from './team.interface';
import { Team } from './team.model';

const createTeamIntoDB = async (payload: TTeam) => {
  const result = await Team.create(payload);

  return result;
};

const getAllTeamFromDB = async () => {
  const result = await Team.find();
  return result;
};

const getSingleTeamMemberFromDB = async (id: string) => {
  const result = await Team.findById(id);
  return result;
};

const deleteTeamMemberFromDB = async (id: string) => {
  const result = await Team.findByIdAndDelete(id);
  return result;
};

const updateTeamMemberFromDB = async (id: string, payload: Partial<TTeam>) => {
  const result = await Team.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const TeamsService = {
  createTeamIntoDB,
  getAllTeamFromDB,
  deleteTeamMemberFromDB,
  updateTeamMemberFromDB,
  getSingleTeamMemberFromDB,
};
