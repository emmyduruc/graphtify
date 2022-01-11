import { mockdbData } from "../../assets/mockdbData";
import "./style.scss";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import RowValues from "../RowValues/RowValues";
import GraphView from "../graph/GraphView";

type Props = {
  id: string;
  name: string;
  checkId: string;
};
const Home = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
 

  return (
    <div className="home">
      <div className="home-content">
        <div>
          <h4 className="media-plan-cont">Media Plan</h4>
          <input className="input" />
        </div>
        <div aria-label="date" className="date">
          <div aria-label="start-date">
            <h4 className="media-plan-cont">Start date</h4>
            <DatePicker
              isClearable
              filterDate={(d) => {
                return new Date() > d;
              }}
              placeholderText="Select Start Date"
              className="end-date"
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mmaa"
              selected={startDate}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              onChange={(date: any) => setStartDate(date)}
            />
          </div>
          <div aria-label="end-date">
            <h4 className="media-plan-cont">End date</h4>
            <DatePicker
              isClearable
              filterDate={(d) => {
                return new Date() > d;
              }}
              placeholderText="Select End Date"
              showTimeSelect
              className="end-date"
              selected={endDate}
              dateFormat="MMMM d, yyyy h:mmaa"
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              onChange={(date: any) => setEndDate(date)}
            />
          </div>
        </div>
        <div aria-label="media-datas">
          {mockdbData.map((ele, i) => (
            <div className="media-data-header" aria-label="media-header">
              <h4>{ele.content.channel}</h4>
              <h4 className="budget">{ele.content.budget}</h4>
              <h4 className="keep-consistent">
                {ele.content.keep_consistent.name}
              </h4>
              <h4>{ele.content.exclude.name}</h4>
            </div>
          ))}

          {mockdbData[0].channels.map((ele) => {
            return(<RowValues key={ele.id} rowChannel={ele} />)
            
          })}
        </div>
        <div className="button-contanier" aria-label="buttons">
          <button className="plan-button ">Copy plan</button>
          <button className="plan-button ">Save plan</button>
          <button className="plan-button " >
        view graph
      </button>
     
        </div>
     
        <div><GraphView/></div>
      </div>
    </div>
  );
};

export default Home;
