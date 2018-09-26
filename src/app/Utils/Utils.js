import moment from 'moment';

export const calcStatus = (rating) => {
  // apply round before calculating status
  rating = parseRating(rating);
  return rating >= 5 ? 'negative' : 'positive';
}

export const parseRating = (rating) => Math.round(rating);

export const timeParserDE = (date) => {
  return moment(date).format("DD.MM.YYYY");
}