export const pagesCount = (length: number) => {
  const rounded = Math.round(length / 20) + 1;

  const roundedArray = [];

  for (let i = 0; i < rounded; i++) {
    roundedArray.push(i);
  }

  return roundedArray.slice(1);
};
