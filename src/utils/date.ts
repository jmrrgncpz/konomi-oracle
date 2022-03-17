export const parseISOString = (dateString: string) => {
  var b = dateString.split(/\D+/);
  return new Date(Date.UTC(Number(b[0]), Number(b[1]) - 1, Number(b[2]), Number(b[3]), Number(b[4]), Number(b[5]), Number(b[6])));
}