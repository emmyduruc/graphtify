import { useState } from "react";
import { mockdbData } from "../../assets/mockdbData";
import { currencyFormatter } from "../../constant/validation/validation";
import "./style.scss";

type Props = {
  id: string;
  name: string;
  checkId: string;
};

const RowValues = ({ rowChannel }: any) => {
  const [inputEvent, setInputEvent] = useState("");
  const [newValue, setNewInputValue] = useState("");

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const format = setInputEvent(e.target.value);
    //setInputEvent(format);
    return format;
  };

  const [state, setState] = useState({ price: "", id: "" });
  const handleNewOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
    //setInputEvent(format);
    console.log("price", state.price);
  };

  const formatCurrency = () => {
    let numUSD = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    const vs = Number(inputEvent);

    console.log("vs", vs);
    const allformatted = numUSD.format(vs);
    return allformatted;
  };
  console.log("formattedCurrency", formatCurrency());

  // const handleClick = (e: any) => {
  //   const formatted = currencyFormatter(inputEvent);
  //   console.log("formatted", formatted);
  //   e.preventDefaultValue();
  //   const newFormat = setNewInputValue(formatted);
  //   return newFormat;
  // };
  //currencyFormatter(inputEvent);

  return (
    <div>
      <h2>{inputEvent}</h2>
      <div className="individual-values-row" aria-label="individual-values">
        <h4 className="channel-name">{rowChannel.name} </h4>
        <input
          placeholder="0.00"
          required
          name="price"
          onChange={(e) => handleOnchange(e)}
          className="sea-input"
          value={inputEvent}
          onBlur={(e) => handleOnchange(e)}
          title="Currency"
        />
        <button>save</button>
        {/* <input
          type="text"
          placeholder={`${formatCurrency("0.00")}`}
          value={formatCurrency(inputEvent)}
          step=".01"
           pattern="^\d+(?:\.\d{1,2})?$"
          onChange={ (e)=>handleOnchange(e)}
          className="sea-input"
        />  */}
        {/* <button onClick={handleClick}>save</button> */}
        <div>
          <input
            type="radio"
            id="scales"
            name="scales"
            className="checkingbox"
          />
        </div>
        <input type="radio" id="scales" name="scales" className="checkingbox" />
      </div>
    </div>
  );
};

export default RowValues;
