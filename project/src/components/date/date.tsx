export default function formatDate(date: string) {
  const dateOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    year: 'numeric'
  };
  const yearMonth = new Date(date).toLocaleDateString('en-US', dateOptions);
  const fullDate = new Date(date).toISOString().slice(0,10);
  return {
    yearMonth,
    fullDate
  };
}
