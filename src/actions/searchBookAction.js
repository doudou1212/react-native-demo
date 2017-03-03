import BookAPI from '../BookAPI';

export const SEARCH_BOOK_INFO = "SEARCH_BOOK_INFO";

export const searchBookInfo = (param) => {
  return {
    type: SEARCH_BOOK_INFO,
    promise: BookAPI.searchBookInfo(param)
  };
};
