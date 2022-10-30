import React, { useState } from "react";
import axios from "axios";
import "./Home.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import Barchart from "../../components/Charts/Barchart";
import { UserData } from "../../Data";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Symptoms } from "../../Data";
import HealingIcon from "@mui/icons-material/Healing";
import FormControl from "@mui/material/FormControl";
import MenuIcon from "@mui/icons-material/Menu";
import Piechart from "../../components/Charts/Piechart";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

function Home() {
  const [loading, setloading] = useState(false);
  const [gotans, setgotans] = useState(false);
  const [predicted, setpredicted] = useState("");
  const [personSymptoms, setpersonSymptoms] = useState([]);
  const [userData, setuserData] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        label: "Activity per day",
        data: UserData.map((data) => data.activity),
      },
    ],
  });

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setpersonSymptoms(typeof value === "string" ? value.split(",") : value);
  };

  function handleClick() {
    setloading(true);
    let newSymptoms = Object.assign({}, Symptoms);
    for (let i = 0; i < personSymptoms.length; i++) {
      newSymptoms[personSymptoms[i]] = 1;
    }
    axios
      .post("predict", { newSymptoms })
      .then((response) => setpredicted(response.data.ans));
    setloading(false);
    setgotans(true);
  }

  return (
    <div className="home">
      <div className="home_main_conatiner">
        <div className="main_top">
          <h1>Dashboard</h1>
          <div className="date">
            <CalendarMonthIcon />
            <p>Wednesday, 24-10-2022</p>
          </div>
          <MenuIcon className="icon" />
        </div>

        <div className="health_metrices">
          <div
            className="card"
            style={{
              background: "rgb(2,0,36)",
              background:
                "linear-gradient(90deg, rgba(2,0,36,1) 8%, rgba(9,9,121,1) 30%, rgba(0,212,255,1) 98%)",
            }}
          >
            <div className="card_top">
              <DeviceThermostatIcon className="icon" />
              <p>
                36.6 <span style={{ fontSize: "2.5rem" }}>°C</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Temperature
            </div>
            <div className="card_bottom">
              <p>Temperature below 35 °C indicates a serious illness</p>
            </div>
          </div>

          <div
            className="card"
            style={{
              background: "rgb(36,28,28)",
              background:
                "linear-gradient(90deg, rgba(36,28,28,1) 0%, rgba(152,11,35,1) 44%, rgba(255,0,0,1) 98%)",
            }}
          >
            <div className="card_top">
              <FavoriteIcon className="icon" />
              <p>
                102 <span style={{ fontSize: "2.5rem" }}>bpm</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Heart Rate
            </div>
            <div className="card_bottom">
              <p>Pulse is the most important phsyicological indicator</p>
            </div>
          </div>

          <div
            className="card"
            style={{
              background: "rgb(36,28,28)",
              background:
                "linear-gradient(90deg, rgba(36,28,28,1) 0%, rgba(7,103,34,1) 44%, rgba(18,255,0,1) 98%)",
            }}
          >
            <div className="card_top">
              <BloodtypeIcon className="icon" />
              <p>
                120 <span style={{ fontSize: "2.5rem" }}>/80</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Blood Pressure
            </div>
            <div className="card_bottom">
              <p>Blood Pressure can rise and fall several times a day</p>
            </div>
          </div>

          <div
            className="card"
            style={{
              background: "rgb(96,48,9)",
              background:
                "linear-gradient(90deg, rgba(96,48,9,1) 0%, rgba(181,106,32,1) 39%, rgba(237,137,22,1) 98%)",
            }}
          >
            <div className="card_top">
              <FavoriteIcon className="icon" />
              <p>
                90 <span style={{ fontSize: "2.5rem" }}>mg/dl</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Glucose
            </div>
            <div className="card_bottom">
              <p>The normal concentration of Glucose is 80-120 mg/dl</p>
            </div>
          </div>
        </div>

        <div className="disease">
          <div className="disease_detect">
            <h1>What are you feeling today?</h1>

            <FormControl sx={{ m: 1, width: 400, margin: "2rem 0rem" }}>
              <InputLabel id="demo-multiple-checkbox-label">
                Select your symptoms here...
              </InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                multiple
                value={personSymptoms}
                onChange={handleChange}
                input={<OutlinedInput label="Symptoms" />}
                renderValue={(selected) => selected.join(", ")}
                placeholder="Select your Symptoms"
                MenuProps={MenuProps}
              >
                {Object.keys(Symptoms).map((symptom) => (
                  <MenuItem key={symptom} value={symptom}>
                    <Checkbox checked={personSymptoms.indexOf(symptom) > -1} />
                    <ListItemText primary={symptom} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <button className="button" onClick={handleClick} disabled={loading}>
              <p>Check</p>
              <HealingIcon />
            </button>
          </div>

          {/* <div className="disease_result">
            <h1>You may have {predicted}</h1>
          </div> */}

          {gotans === true && (
            <div className="disease_result">
              <h1>
                You may have{" "}
                <span style={{ color: "#D0342C" }}>{predicted}</span>
              </h1>

              <div className="results">
                <div className="causes">
                  <h2>Causes:</h2>
                  <ol>
                    <li>
                      Fluctuating hormone levels around the time of a woman’s
                      period.
                    </li>
                    <li>Picking at acne sores.</li>
                    <li>
                      Clothing and headgear, like hats and sports helmets.
                    </li>
                    <li>
                      Air pollution and certain weather conditions, especially
                      high humidity.
                    </li>
                    <li>
                      Using oily or greasy personal care products (like heavy
                      lotions, creams or hair pomades and waxes) or working in
                      an area where you routinely come in contact with grease
                      (such as working at a restaurant where there are greasy
                      food surfaces and frying oil).
                    </li>
                    <li>
                      Stress, which increases the hormone cortisol, can also
                      cause acne to flare.
                    </li>
                    <li>Some medications.</li>
                    <li>Genetics</li>
                  </ol>
                </div>

                <div className="prevention">
                  <h2>Prevention:</h2>
                  <ol>
                    <li>
                      Wash your face daily with warm water and a mild facial
                      cleanser.
                    </li>
                    <li>Routinely use moisturizer.</li>
                    <li>
                      You don’t have to stop using makeup, but try to use
                      “non-comedogenic” products and remove makeup at the end of
                      each day.
                    </li>
                    <li>Keep your hands away from your face.</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="charts">
          <div className="bar_chart">
            <Barchart chartData={userData} />
          </div>
          <div className="pie_chart">
            <Piechart chartData={userData} />
          </div>
        </div>
      </div>
      {/* <div className="home_right_conatiner">
        <div className="user_info">
          <div className="user_name">
            <img
              src="https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
              className="profile"
              alt="profile"
            />
            <p>Emma Watson</p>
            <span>21 years</span>
          </div>

          <div className="user_matrices">
            <div className="user_matrices_card">
              <img
                src={require("../../assets/weight.png")}
                alt="weight"
                className="image"
              />
              <h4>Weight</h4>
              <p>65 Kg</p>
            </div>
            <div className="user_matrices_card">
              <img
                src={require("../../assets/height.png")}
                alt="height"
                className="image"
              />
              <h4>Height</h4>
              <p>173 cm</p>
            </div>
            <div className="user_matrices_card">
              <img
                src={require("../../assets/sleep.png")}
                alt="sleep"
                className="image"
              />
              <h4>Sleep</h4>
              <p>8h 50m</p>
            </div>
          </div>
        </div>
        <div className="chat_support">Chat Support system</div>
      </div> */}
    </div>
  );
}

export default Home;
