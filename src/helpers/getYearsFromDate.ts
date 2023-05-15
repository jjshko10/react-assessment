export const getYearsFromDate = (date: number): string => {
  const now = Date.now();
  const ageTimestamp = now - date;
  const age = Math.trunc(ageTimestamp / 360 / 24 / 60 / 60 / 1000);
  return age.toString();
};
