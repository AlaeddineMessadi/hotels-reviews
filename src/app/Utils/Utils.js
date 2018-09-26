import moment from 'moment';

export const timeParserDE = (date) => {
  return moment(date).format("DD.MM.YYYY");
}