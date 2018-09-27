import moment from 'moment';

export const timeParserDE = (date) => {
  return moment(date).format("DD.MM.YYYY");
}

// use double backslash to let to browser define which protocol to use.
// useful for the warning messages "Loading mixed (insecure) display content"
export const secureImageUrl = (url) => {
  return url.replace(/^http:\/\//i, '//');
}