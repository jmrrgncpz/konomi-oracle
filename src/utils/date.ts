const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric', month: '2-digit', day: '2-digit',
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  hour12: false,
});

export const formatDateString = (dateString: string) => {
  var b = dateString.split(/\D+/);
  const date = new Date(Date.UTC(Number(b[0]), Number(b[1]) - 1, Number(b[2]), Number(b[3]), Number(b[4]), Number(b[5]), Number(b[6])));
  const parts = formatter.formatToParts(date);
  const { day, month, year, hour, minute } = parts.reduce((acc: { [key: string]: string }, curr) => {
    acc[curr.type] = curr.value;
    return acc;
  }, {})

  return `${day}/${month}/${year} ${hour}:${minute}`;
}