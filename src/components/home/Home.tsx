import { mockdbData } from "../../assets/mockdbData";
import "./style.scss";
const Home = () => {
  console.log(mockdbData);
  return (
    <div className="home">
      <div className="home-content">
        {/* <label>Media Plan</label><br></br> */}
        <div>
          <h4 className="media-plan-cont">Media Plan</h4>
          <input className="input" />
        </div>
        <div aria-label="date" className="date">
          <div aria-label="start-date">
            <h4 className="media-plan-cont">Start date</h4>
            <input
              className="start-date"
              type="date"
              id="end"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2018-12-31"
            />
          </div>
          <div aria-label="end-date">
            <h4 className="media-plan-cont">End date</h4>
            <input
              className="end-date"
              type="date"
              id="start"
              name="trip-start"
              value="2018-07-22"
              min="2018-01-01"
              max="2022-12-31"
            />
          </div>
        </div>
        <div aria-label="media-datas">
          {mockdbData.map((ele, i) => (
            <div className="media-data-header" aria-label="media-header">
              <h4>{ele.content.channel}</h4>
              <h4>{ele.content.budget}</h4>
              <h4>{ele.content.keep_consistent}</h4>
              <h4>{ele.content.exclude}</h4>
            </div>
          ))}
          <div className="media-values" aria-label="media-values">
            <div className="individual-values-row" aria-label="individual-values">
              <h4>SEA</h4>
              <input type="text" />
              <input type="checkbox" id="scales" name="scales" />
              <input type="checkbox" id="scales" name="scales" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
