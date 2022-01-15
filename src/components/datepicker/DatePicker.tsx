import { useState } from "react";
import DatePicker from "react-datepicker";
import "./style.scss";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div aria-label="date" className="date">
      <div aria-label="start-date">
        <h4 className="media-plan-cont">Start date</h4>
        <DatePicker
          isClearable
          filterDate={(d) => {
            return new Date() < d;
          }}
          placeholderText="Select Start Date"
          className="end-date"
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mmaa"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={(date: Date) => setStartDate(date)}
        />
      </div>
      <div aria-label="end-date">
        <h4 className="media-plan-cont">End date</h4>
        <DatePicker
          isClearable
          filterDate={(d) => {
            return new Date() < d;
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
          onChange={(date: Date) => setEndDate(date)}
        />
      </div>
    </div>
  );
};

export default Datepicker;
