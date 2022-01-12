import React from "react";

export const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
  let value = e.target.value;
  //checks if the value is a string and then it will be emty string
  value = value.replace(/\D/g, "");
  //validates for 2 decimal values
  value.replace(/(\d)(\d{2})$/, "$1. $2");
  //thousand seperator
  value.replace(/(?=(\d{3})+(\D))\B/g, ",");
  e.target.value = value;
  return e;
};
// const [state, setState] = useState({ price: "", id: "" });
//   const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//     //setInputEvent(format);
//     console.log("price", state.price);
//   };
//B(?=(\d{3})+(?!\d))/g
