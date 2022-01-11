import { useState } from "react";

const defaultOptions = {
  significantDigits: 2,
  thousandsSeparator: ",",
  decimalSeparator: ".",
  symbol: "$",
  option: "",
};
// export const Validation = () => {
//   const [inputEvent, setInputEvent] = useState("");

//   const handleOnchange = (e: any) => {
//     currencyFormatter(setInputEvent(e.target.value));
//   };
//   const currencyFormatter = (value: any) => {
//     if (typeof value !== "number") value = 0.0;
//     const options = { ...defaultOptions };
//     value = value.toFixed(options.significantDigits);

//     const [currency, decimal] = value.split(".");
//     return `${currency.replace(
//       /\B(?=(\d{3})+(?!\d))/g,
//       options.thousandsSeparator
//     )}${options.decimalSeparator}${decimal} ${options.symbol} `;
//   };

// return (
//   <input
//     type="text"
//     value={inputEvent}
//     onChange={handleOnchange}
//   />
// );
//};
export const currencyFormatter = (value:any, ...args:any) => {
  const options = { ...defaultOptions, ...args};
  value = Number(value).toFixed(options.significantDigits);
  const [currency, decimal] = value.split(".");

  return `${currency.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    options.thousandsSeparator
  )}${options.decimalSeparator}${decimal} ${options.symbol} `;
};
console.log(currencyFormatter(4738.44))
