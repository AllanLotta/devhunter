export const formatNumber = (number: number): string => {
  if ((number / 100) % 10 === 0) return `${Math.floor(number / 1000)}k`;
  return `${Math.floor(number / 100) / 10.0}k`;
};
