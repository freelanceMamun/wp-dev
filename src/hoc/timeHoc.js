export const TimeHoc = (value) => {
  const date = new Date(value * 1000);
  let formateTime = date.toJSON();
  return formateTime;
};
