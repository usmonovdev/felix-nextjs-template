export const numberWithSpace = (price: number | string): string => {
  let priceStr = price.toString().replace(/[^\d.]/g, "");
  let [integerPart, fractionalPart] = priceStr.split(".");
  integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  if (fractionalPart) {
    return `${integerPart}.${fractionalPart}`;
  } else {
    return integerPart;
  }
};
