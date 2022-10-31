import "./App.css";
import { useState } from "react";
import { UserData } from "./Data";
import LineChart from "./components/LineChart";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import NearMeIcon from "@mui/icons-material/NearMe";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import sky from "./images/sky_vw.jpg";
import AirIcon from '@mui/icons-material/Air';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import BathroomIcon from '@mui/icons-material/Bathroom';
import CloudIcon from '@mui/icons-material/Cloud';


function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.hour),
    datasets: [
      {
        label: "Up Coming hours",
        data: UserData.map((data) => data.temp),
      },
    ],
  });
  return (
    <div className="box1">
      <div className="box2">
        <div className="disp">
          <img src={sky} width="500" height="935" />
          <div className="action">
            <div className="addbox">
              <AddBoxIcon />
            </div>
            <div className="toff">
              <span className="corf">&deg;C</span>
              <ToggleOffIcon />
              <span className="corf">&deg;F</span>
            </div>
          </div>
          <div className="loc">
            <div className="city">
              <div className="nmicon">
                <NearMeIcon />
              </div>
              <p className="place">NewYork,USA</p>
              <p className="ctime">7:20</p>
            </div>
            <div className="date">
              <p className="dt">Today, 28 sept</p>
              <p className="dtime">19:32</p>
            </div>
          </div>
          <div className="temperature">
            <div className="act">
              <div className="leftarrow">
                <ArrowBackIosIcon />
              </div>
              <p className="tdisp">
                27<span>&deg;</span>
              </p>
              <div className="rightarrow">
                <ArrowForwardIosIcon />
              </div>
            </div>
            <div className="sunnyic">
              <div className="sic">
                <WbSunnyIcon />
              </div>
              <p className="wtxt">Sunny</p>
            </div>
          </div>
          {/*<div>Div1</div>*/}
        </div>
        <div className="analysis">
          <div className="userinfo">
            <p>Welcome back Isabella</p>
            <br />
            <p className="winfo">Check out todays weather information</p>
          </div>
          <div className="chart">
            <LineChart chartData={userData} />
          </div>
          <div className="info">
            <span>Todays Weather</span>

            <div></div>

            <div></div>

            <div className="idiv">
              <div className="hum">
                <p className="humt">humidity</p>
                <div className="humi"><CloudIcon/></div>
              </div>
              <div className="humv">
                <p>82% bad</p>
              </div>
            </div>

            <div className="idiv">
              <div className="wind">
                <p className="windt">wind</p>
                <div className="windi"><AirIcon/></div>
              </div>
              <div className="windv">
                <p>8km/hr</p>
              </div>
            </div>

            <div className="idiv">
              <div className="precip">
                <p className="precipt">precipitation</p>
                <div className="precipi"><BathroomIcon/></div>
              </div>
              <div className="precipv">
                <p>1.4cm</p>
              </div>
            </div>

            <div className="idiv">
              <div className="uvindex">
                <p className="uvt">uvindex</p>
                <div className="uvi"><WbSunnyIcon/></div>
              </div>
              <div className="uvv">
                <p>4medium</p>
              </div>
            </div>

            <div className="idiv">
              <div className="fl">
                <p className="flt">feels like</p>
                <div className="fli"><DeviceThermostatIcon/></div>
              </div>
              <div className="flv">
                <p>
                  30<span>&deg;</span>
                </p>
              </div>
            </div>

            <div className="idiv">
              <div className="cor">
                <p className="cort">chance of rain</p>
                <div className="cori"><ThunderstormIcon/></div>
              </div>
              <div className="corv">
                <p>
                  42%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
