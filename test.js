function calcuteparkingcost(hours) {
  if (hours <= 2) {
    return 2 * 50;
  } else if (hours > 2) {
    return 2 * 50 + (hours - 2) * 30;
  }
}
console.log(calcuteparkingcost(7));
