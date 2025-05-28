export function formatDate(date: Date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "pm" : "am";

  hours = hours % 12;
  hours = hours ? hours : 12;

  const formatted = `${month} ${day}, ${year} ${hours}:${minutes}${ampm}`;
  return formatted;
}
