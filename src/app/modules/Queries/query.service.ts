import { TQuery } from './query.interface';
import { Query } from './query.model';

const createQueryIntoDB = async (payload: TQuery) => {
  const result = await Query.create(payload);
  return result;
};

const getAllQueryFromDB = async () => {
  const result = await Query.find({ mark: false });
  return result;
};

const getMarkedQueryFromDB = async () => {
  const result = await Query.find({ mark: true });
  return result;
};

const getSingleQueryFromDB = async (id: string) => {
  const result = await Query.findById(id);
  return result;
};

const updateQueryFromDB = async (id: string) => {
  const result = await Query.findByIdAndUpdate(id, { mark: true }, { new: true });
  return result;
};

const deleteQueryFromDB = async (id: string) => {
  const result = await Query.findByIdAndDelete(id);
  return result;
};

export const QueryServices = {
  createQueryIntoDB,
  getAllQueryFromDB,
  getSingleQueryFromDB,
  updateQueryFromDB,
  getMarkedQueryFromDB,
  deleteQueryFromDB,
};
