function date () {
  const currentDate = new Date();
  return currentDate.toLocaleDateString();
}

function date2 () {
  const currentDate = new Date();
  return currentDate.toDateString();
}

module.exports = {date, date2};