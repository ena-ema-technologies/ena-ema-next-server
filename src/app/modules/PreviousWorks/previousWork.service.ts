import { TPreviousWork } from './previousWork.interface';
import { PreviousWork } from './previousWork.model';

const createPreviousWorkIntoDB = async (payload: TPreviousWork) => {
  const result = await PreviousWork.create(payload);
  return result;
};

const getAllPreviousWorkFromDB = async () => {
  const result = await PreviousWork.find();
  return result;
};

const getSinglePreviousWorkFromDB = async (id: string) => {
  const result = await PreviousWork.findById(id);
  return result;
};

const deletePreviousWorkFromDB = async (id: string) => {
  const result = await PreviousWork.findByIdAndDelete(id);
  return result;
};

export const PreviousWorkServices = {
  createPreviousWorkIntoDB,
  getAllPreviousWorkFromDB,
  getSinglePreviousWorkFromDB,
  deletePreviousWorkFromDB,
};
