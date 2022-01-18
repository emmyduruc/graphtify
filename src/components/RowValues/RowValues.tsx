import { useState } from "react";
import "./style.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { budgetValue, sumNumbers } from "../../constant/redux/actions";
import { BudgetNew, RootState, RowChannelProps } from "../../assets/types";

const RowValues = ({ rowChannel }: RowChannelProps) => {
  const dispatch = useDispatch();
  const [inputEvent, setInputEvent] = useState<BudgetNew>();

  const numArray: Array<number> = [];
  let newSum = 0;
  const channelSelectorStates = useSelector(
    (state: RootState) => state.budgetReducer.budgets
  );

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let formattedValues = e.target.value
      //checks if the value is a string and then it will be empty string
      .replace(/\D/g, "")
      //validates for 2 decimal values
      .replace(/(\d)(\d{2})$/, "$1.$2")
      //thousand seperator
      .replace(/(?=(\d{3})+(\D))\B/g, ",");
    setInputEvent({
      channelName: rowChannel.name,
      channelValue: formattedValues,
    });
  };

  const [finalValueOfChannels, setFinalValuesOfChannels] =
    useState<BudgetNew>();
  if (finalValueOfChannels !== undefined) {
    dispatch(budgetValue(finalValueOfChannels));
  }

  const handleOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== undefined) {
      setFinalValuesOfChannels(inputEvent);
    }
  };

  (function () {
    if (channelSelectorStates.length) {
      channelSelectorStates.map((channelValues) => {
        const convertedNumberOfChannels = +channelValues.channelValue.replace(
          /,/g,
          ""
        );
        numArray.push(convertedNumberOfChannels);
        return convertedNumberOfChannels;
      });
    }
  })();

  (function () {
    if (numArray.length) {
      const sum = numArray?.reduce((prev, curr) => prev + curr);
      newSum = sum;
      dispatch(sumNumbers(sum));
      return newSum;
    }
  })();
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
              value={inputEvent ? inputEvent.channelValue : ""}
              onBlur={handleOnBlur}
            />
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
