function formatDate(inputDate) {
  var date = new Date(inputDate);
  var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  var formattedDate = new Intl.DateTimeFormat('fa-IR', options).format(date);
  return formattedDate;
}

export { formatDate };
