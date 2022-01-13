import { useState } from "react";
import { mockdbData } from "../../assets/mockdbData";
import { currencyFormatter } from "../../constant/validation/validation";
import "./style.scss";
import React from "react";
import { useDispatch } from "react-redux";
import { budgetValue } from "../../constant/redux/actions";

type Props = {
  id: string;
  name: string;
  checkId: string;
};

const RowValues = ({ rowChannel }: any) => {
  const dispatch = useDispatch();
  const [inputEvent, setInputEvent] = useState<string>();
  console.log("sum up event", inputEvent);

  // const dispatchEnteredValue = () => {
  //   dispatch(budgetValue);
  // };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formattedValues = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d)(\d{2})$/, "$1.$2")
      .replace(/(?=(\d{3})+(\D))\B/g, ",");
    setInputEvent(formattedValues);
  };

  return (
    <div>
      <div className="individual-values-row" aria-label="individual-values">
        <h4 className="channel-name">{rowChannel.name} </h4>
        <input
          placeholder="$0.00"
          type="text"
          name="price"
          onChange={(e) => handleOnchange(e)}
          className="sea-input"
          value={inputEvent}
          // onBlur={(e) => handleOnchange(e)}
          //title="Currency"
        />
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
