import { useEffect, useState } from "react";
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
  const [inputEvent, setInputEvent] = useState<string>("");

  // const dispatchEnteredValue = () => {
  //   dispatch(budgetValue);
  // };

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("event", e.target.value);
    let formattedValues = e.target.value
      //checks if the value is a string and then it will be emty string
      .replace(/\D/g, "")
      //validates for 2 decimal values
      .replace(/(\d)(\d{2})$/, "$1.$2")
      //thousand seperator
      .replace(/(?=(\d{3})+(\D))\B/g, ",");
    setInputEvent(formattedValues);
    dispatch(
      budgetValue({
        channelName: rowChannel.name,
        channelValue: formattedValues,
      })
    );
  };

  const [finalValueOfChannels, setFinalValuesOfChannels] = useState();

  //console.log("valuess", myArrayreduce((a, b) => a + b, 0));

  console.log("final Value", finalValueOfChannels);
  const handleOnBlur = (event: any) => {
    console.log("event", event);
    if (event !== undefined) {
      //dispatch(budgetValue(event.target.value));
    }
    setFinalValuesOfChannels(event.target.value);
  };

  return (
    <div>
      <div className="individual-values-row" aria-label="individual-values">
        <h4 className="channel-name">{rowChannel.name} </h4>
        <div className="input-box-render">
          <span>$</span>
          <div className="input-box-with-error">
            <input
              placeholder="0.00"
              type="text"
              name="price"
              onChange={(e) => handleOnchange(e)}
              className="sea-input"
              value={inputEvent}
              //onBlur={handleOnBlur}
              //title="Currency"
            />
            <span className="validation-error">
              {inputEvent === "" ? "please enter a number" : null}
            </span>
          </div>
        </div>

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
