export const calculateDuration = (startDate, endDate) => {
  if (!startDate || !endDate) return "";

  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  const totalMonths = Math.round(diffDays / 30.44);

  if (diffDays < 30) {
    const weeks = Math.max(1, Math.round(diffDays / 7));
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  }

  if (totalMonths < 12) {
    const months = Math.max(1, totalMonths);
    return `${months} month${months > 1 ? "s" : ""}`;
  }

  const years = Math.floor(totalMonths / 12);
  const remainingMonths = totalMonths % 12;

  let result = `${years} year${years > 1 ? "s" : ""}`;

  if (remainingMonths > 0) {
    result += ` and ${remainingMonths} month${remainingMonths > 1 ? "s" : ""}`;
  }

  return result;
};
