export const formatDateString = (dateString: string) => {
  var b = dateString.split(/\D+/);
  const date = new Date(Date.UTC(Number(b[0]), Number(b[1]) - 1, Number(b[2]), Number(b[3]), Number(b[4]), Number(b[5]), Number(b[6])));

  const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  const month = new Intl.DateTimeFormat('en', { month: 'short'}).format(date);
  const day = new Intl.DateTimeFormat('en', { day: '2-digit'}).format(date);
  const hour = new Intl.DateTimeFormat('en', { hour: '2-digit', hour12: false }).format(date);
  const minute = new Intl.DateTimeFormat('en', { minute: '2-digit' }).format(date);

  return `${day}/${month}/${year} ${hour}:${minute}`;
}