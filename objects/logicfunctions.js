function isRestrictedDay(day, plate) {
  if (day == 6 || day == 0) return false;
  const restrictions = {
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8],
    5: [9, 0]
  }
  return restrictions[day].includes(plate)
}

function isRestrictedHour(hour) {
  return (hour >= '07:00' && hour <= '09:30') || (hour >= '16:00' && hour <= '19:30');
}


module.exports = { isRestrictedDay, isRestrictedHour }