export const calculateDuration = (startDate, endDate) => {
  if (!startDate || !endDate) return "";

  const start = new Date(startDate);
  const end = new Date(endDate);

  // Validate dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return "";

  // Ensure start is before end
  const earlierDate = start < end ? start : end;
  const laterDate = start < end ? end : start;

  // Same date
  if (earlierDate.getTime() === laterDate.getTime()) return "0 days";

  // Calculate difference in months more accurately
  let years = laterDate.getFullYear() - earlierDate.getFullYear();
  let months = laterDate.getMonth() - earlierDate.getMonth();

  // Don't subtract month if we're in the next calendar month
  // Only subtract if we haven't completed a full month yet
  if (laterDate.getDate() < earlierDate.getDate()) {
    const daysInStartMonth = new Date(
      earlierDate.getFullYear(),
      earlierDate.getMonth() + 1,
      0
    ).getDate();
    const remainingDaysInStartMonth =
      daysInStartMonth - earlierDate.getDate() + 1;
    const daysInEndMonth = laterDate.getDate();

    // If we have at least 30 days total, consider it a month
    if (remainingDaysInStartMonth + daysInEndMonth < 30) {
      months--;
    }
  }

  const totalMonths = years * 12 + months;

  // Less than a month
  if (totalMonths === 0) {
    const diffTime = laterDate - earlierDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""}`;
    }

    const weeks = Math.ceil(diffDays / 7);
    return `${weeks} week${weeks !== 1 ? "s" : ""}`;
  }

  // Less than a year
  if (totalMonths < 12) {
    // Calculate remaining days after full months
    const monthsToAdd = totalMonths;
    const dateAfterMonths = new Date(earlierDate);
    dateAfterMonths.setMonth(dateAfterMonths.getMonth() + monthsToAdd);

    const remainingTime = laterDate - dateAfterMonths;
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const remainingWeeks = Math.floor(remainingDays / 7);

    let result = `${totalMonths} month${totalMonths !== 1 ? "s" : ""}`;

    if (remainingWeeks > 0) {
      result += ` and ${remainingWeeks} week${remainingWeeks !== 1 ? "s" : ""}`;
    }

    return result;
  }

  // Years and months
  const fullYears = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  let result = `${fullYears} year${fullYears !== 1 ? "s" : ""}`;

  if (remainingMonths > 0) {
    result += ` and ${remainingMonths} month${
      remainingMonths !== 1 ? "s" : ""
    }`;
  }

  return result;
};
