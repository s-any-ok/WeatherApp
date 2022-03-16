export const getCalendarDate = (dt: number) => {
  let result = new Date(dt * 1000).toLocaleDateString().split('/');
  [result[0], result[2]] = [result[2], result[0]];
  [result[1], result[2]] = [result[2], result[1]];
  result = result.map((i) => (i.length === 1 ? '0' + i : i));
  return result.join('-');
};
