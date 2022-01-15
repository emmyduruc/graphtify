import { mockdbData } from "../../assets/mockdbData";
import "./style.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RowValues from "../RowValues/RowValues";
import GraphView from "../graph/GraphView";
import Datepicker from "../datepicker/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../constant/redux/actions";

type Props = {
  id: string;
  name: string;
  checkId: string;
};
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
          <input className="media-input" />
        </div>
        <Datepicker />
        <div aria-label="media-datas">
          {mockdbData.map((ele, i) => (
            <div
              key={ele.id}
              className="media-data-header"
              aria-label="media-header"
            >
              <h4>{ele.content.channel}</h4>
              <h4 className="budget">{ele.content.budget}</h4>
              <h4 className="keep-consistent">
                {ele.content.keep_consistent.name}
              </h4>
              <h4>{ele.content.exclude.name}</h4>
            </div>
          ))}

          {mockdbData[0].channels.map((ele) => {
            return <RowValues key={ele.id} rowChannel={ele} />;
          })}
        </div>
        <div>
          <p>Total value: ${getSummedValue.toFixed(2)} </p>
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
