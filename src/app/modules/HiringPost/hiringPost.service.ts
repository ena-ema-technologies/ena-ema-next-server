import { THiring } from './hiringPost.interface';
import { Hiring } from './hiringPost.model';

const createHiringPostIntoDB = async (payload: THiring) => {
  const result = await Hiring.create(payload);
  return result;
};

const getAllHiringPostFromDB = async () => {
  const result = await Hiring.find();
  return result;
};

const getSingleHiringPostFromDB = async (id: string) => {
  const result = await Hiring.findById(id);
  return result;
};

const updateHiringPostFromDB = async (id: string) => {
  const result = await Hiring.findByIdAndUpdate(id, { mark: true }, { new: true });
  return result;
};

const deleteHiringPostFromDB = async (id: string) => {
  const result = await Hiring.findByIdAndDelete(id);
  return result;
};

export const HiringPostServices = {
  createHiringPostIntoDB,
  getAllHiringPostFromDB,
  getSingleHiringPostFromDB,
  updateHiringPostFromDB,
  deleteHiringPostFromDB,
};
