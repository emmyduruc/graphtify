import { useEffect, useState } from "react";
import { mockdbData } from "../../assets/mockdbData";
import { currencyFormatter } from "../../constant/validation/validation";
import "./style.scss";

type Props = {
  id: string;
  name: string;
  checkId: string;
  handleOnchange:()=>string
};

const RowValues = ({ rowChannel }: any) => {
  const [inputEvent, setInputEvent] = useState("");
  console.log(inputEvent);

  let myArray = [];


  const handleOnchange = (e: any) => {
    if (inputEvent === undefined || null) {
      return currencyFormatter(inputEvent);
    } else {
      setInputEvent(e.target.value)
    }
  };

  useEffect(()=> {
    currencyFormatter(inputEvent)
  }, [inputEvent])
   currencyFormatter(inputEvent);

  return (
    <div>
      <h2>{inputEvent}</h2>
      <div className="individual-values-row" aria-label="individual-values">
        <h4 className="channel-name">{rowChannel.name} </h4>
        <input
          type="text"
          placeholder="USD"
          value={inputEvent}
          onChange={handleOnchange}
          className="sea-input"
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
