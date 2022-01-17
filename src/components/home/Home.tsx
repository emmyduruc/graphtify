import { mockdbData } from "../../assets/mockdbData";
import "./style.scss";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import RowValues from "../RowValues/RowValues";
import GraphView from "../graph/GraphView";
import Datepicker from "../datepicker/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { Props, RootState } from "../../assets/types";

const Home = () => {
  const getSummedValue = useSelector(
    (state: RootState) => state.budgetReducer.sum
  );

  const [hideGraph, setHideGraph] = useState(false);

  const handleClick = () => {
    if (hideGraph === false) {
      setHideGraph(true);
    } else setHideGraph(false);
  };

  return (
    <div className="home">
      <div className="home-content">
        <div>
          <h4 className="media-plan-cont">Media Plan</h4>
          <input
            className="media-input"
            type="text"
            placeholder="set media plan"
          />
        </div>
        <Datepicker />
        <div aria-label="media-datas">
          {mockdbData.map((ele, i) => (
            <div
              key={ele.id}
              className="media-data-header"
              aria-label="media-header"
            >
              <h4 className="channel-headers">{ele.content.channel}</h4>
              <h4 className="budget">{ele.content.budget}</h4>
              <h4 className="keep-consistent">
                {ele.content.keep_consistent.name}
              </h4>
              <h4 className="channel-headers">{ele.content.exclude.name}</h4>
            </div>
          ))}

          {mockdbData[0].channels.map((ele: Props) => {
            return <RowValues key={ele.id} rowChannel={ele} />;
          })}
        </div>
        <div>
          <p>
            Total budgets:{" "}
            <span className="total-sum">${getSummedValue.toFixed(2)} </span>
          </p>
        </div>
        <div className="btncontainer" aria-label="buttons">
          <button className="plan-button ">Copy plan</button>
          <button className="plan-button ">Save plan</button>
          <button onClick={handleClick} className="plan-button ">
            {!hideGraph ? "view graph" : "close graph"}
          </button>
        </div>
        <div>{hideGraph ? <GraphView /> : null}</div>
      </div>
    </div>
  );
};

export default Home;
