import BookAPI from '../BookAPI';

export const GET_BOOK_INFO = "GET_BOOK_INFO";

export const getBookInfo = (bookId) => {
  return {
    type: GET_BOOK_INFO,
    promise: BookAPI.getNewlyBookInfo(newHireId)
  };
};
