import { TReview } from './review.interface';
import { Review } from './review.model';

const createReviewIntoDb = async (payload: TReview) => {
  const result = await Review.create(payload);
  return result;
};

const getAllReviewFromDb = async () => {
  const result = await Review.find();
  return result;
};

const getSingleReviewFromDb = async (id: string) => {
  const result = await Review.findById(id);
  return result;
};

const deleteReviewFromDb = async (id: string) => {
  const result = await Review.findByIdAndDelete(id);
  return result;
};

export const ReviewService = {
  createReviewIntoDb,
  getAllReviewFromDb,
  getSingleReviewFromDb,
  deleteReviewFromDb,
};
