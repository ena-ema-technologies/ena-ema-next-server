import { TJobApplication } from './jobApplication.interface';
import { JobApplication } from './jobApplication.model';

const submitJobApplicationIntoDB = async (payload: TJobApplication) => {
  const result = await JobApplication.create(payload);
  return result;
};

const getAllJobApplicationFromDB = async () => {
  const result = await JobApplication.find({ mark: false });
  return result;
};

const getMarkedJobApplicationFromDB = async () => {
  const result = await JobApplication.find({ mark: true });
  return result;
};

const getSingleJobApplicationFromDB = async (id: string) => {
  const result = await JobApplication.findById(id);
  return result;
};

const updateJobApplicationFromDB = async (id: string) => {
  const result = await JobApplication.findByIdAndUpdate(
    id,
    { mark: true },
    { new: true },
  );
  return result;
};

const deleteJobApplicationFromDB = async (id: string) => {
  const result = await JobApplication.findByIdAndDelete(id);
  return result;
};

export const JobApplicationServices = {
  submitJobApplicationIntoDB,
  getMarkedJobApplicationFromDB,
  getAllJobApplicationFromDB,
  getSingleJobApplicationFromDB,
  updateJobApplicationFromDB,
  deleteJobApplicationFromDB,
};
