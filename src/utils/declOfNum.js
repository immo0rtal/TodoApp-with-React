export const declOfNum = (number) => {
  const titles = ["item", "items"];
  return titles[number === 1 ? 0 : 1];
};
