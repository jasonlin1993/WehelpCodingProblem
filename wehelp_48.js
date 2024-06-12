function getOrdinalNumber(num) {
  const numStr = num.toString();

  const lastDigit = parseInt(numStr.slice(-1));
  const lastTwoDigits = parseInt(numStr.slice(-2));

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return numStr + "th";
  }

  switch (lastDigit) {
    case 1:
      return numStr + "st";
    case 2:
      return numStr + "nd";
    case 3:
      return numStr + "rd";
    default:
      return numStr + "th";
  }
}
