export const formatDate = (date) => {
  const dt = (new Date(Date.parse(date)));
  const year = dt.getFullYear();
  const month = (dt.getMonth() + 1 + '').length < 2 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
  const day = dt.getDate()
  const hours = (dt.getHours() + '').length < 2 ? '0' + dt.getHours() : dt.getHours();
  const minutes = (dt.getMinutes() + '').length < 2 ? '0' + dt.getMinutes() : dt.getMinutes();
  const seconds = (dt.getSeconds() + '').length < 2 ? '0' + dt.getSeconds() : dt.getSeconds()

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}