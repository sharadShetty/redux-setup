import { ADD_ARTICLE } from '../constants';

export const addArticle = (payload) => {
  return { type: ADD_ARTICLE, payload };
};
