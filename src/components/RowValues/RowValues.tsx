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
 

let myArray = []

  const handleOnchange = (e: any) => {
    setInputEvent(e.target.value)
  };
 
  const handleClick = ()=>{
   let numUSD = Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})
   const vs = Number(inputEvent)
   return numUSD.format(vs)
  }
  console.log("numUSD",handleClick())
  //currencyFormatter(inputEvent)
  
  return (
    <div>
       <h2>{inputEvent}</h2>
      <div className="individual-values-row" aria-label="individual-values">
        <h4 className="channel-name">{rowChannel.name} </h4>
        <input
          type="text"
          placeholder={`${handleClick()}`}
          value={inputEvent}
          onBlur={handleClick}
          onChange={ (e)=>setInputEvent(e.target.value)}
          className="sea-input"
        />
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
