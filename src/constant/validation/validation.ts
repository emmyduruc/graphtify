import { useState } from "react";

const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbol: "usd",
  option: "",
};
// export const Validation = () => {

export const currencyFormatter = (value: string | number) => {
  if (typeof value !== "number") value = 0.0;
  const options = { ...defaultOptions };
  value = value.toFixed(options.significantDigits);
  const [currency, decimal] = value.split(".");

  return `${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal} ${options.symbol} `;
};
console.log(currencyFormatter(476));
