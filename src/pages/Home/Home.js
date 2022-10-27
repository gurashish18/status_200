import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
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
  return (
    <div className="home">
      <Sidebar />
      <div className="home_main_conatiner">
        <div className="main_top">
          <h1>Dashboard</h1>
          <div className="date">
            <CalendarMonthIcon />
            <p>Wednesday, 24-10-2022</p>
          </div>
        </div>

        <div className="health_metrices">
          <div className="card">
            <div className="card_top">
              <DeviceThermostatIcon
                style={{ color: "#00008B", fontSize: "3rem" }}
              />
              <p style={{ color: "#00008B", fontSize: "2rem" }}>
                36.6 <span style={{ fontSize: "1.5rem" }}>°C</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Temperature
            </div>
            <div className="card_bottom">
              <p style={{ color: "darkgray" }}>
                Temperature below 35 °C indicates a serious illness
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_top">
              <FavoriteIcon style={{ color: "#880808", fontSize: "3rem" }} />
              <p style={{ color: "#880808", fontSize: "2rem" }}>
                102 <span style={{ fontSize: "1.5rem" }}>bpm</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Heart Rate
            </div>
            <div className="card_bottom">
              <p style={{ color: "darkgray" }}>
                Pulse is the most important phsyicological indicator
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_top">
              <BloodtypeIcon style={{ color: "#023020", fontSize: "3rem" }} />
              <p style={{ color: "#023020", fontSize: "2rem" }}>
                120 <span style={{ fontSize: "1.5rem" }}>/80</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Blood Pressure
            </div>
            <div className="card_bottom">
              <p style={{ color: "darkgray" }}>
                Blood Pressure can rise and fall several times a day
              </p>
            </div>
          </div>

          <div className="card">
            <div className="card_top">
              <FavoriteIcon style={{ color: "#e4d00a", fontSize: "3rem" }} />
              <p style={{ color: "#e4d00a", fontSize: "2rem" }}>
                90 <span style={{ fontSize: "1.5rem" }}>mg/dl</span>
              </p>
            </div>
            <div
              className="card_center"
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              Glucose
            </div>
            <div className="card_bottom">
              <p style={{ color: "darkgray" }}>
                The normal concentration of Glucose is 80-120 mg/dl
              </p>
            </div>
          </div>
        </div>

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
              {Symptoms.map((symptom) => (
                <MenuItem key={symptom} value={symptom}>
                  <Checkbox checked={personSymptoms.indexOf(symptom) > -1} />
                  <ListItemText primary={symptom} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <div className="button">
            <p>Check</p>
            <HealingIcon />
          </div>
        </div>

        <div className="charts">
          <div className="bar_chart">
            <Barchart chartData={userData} />
          </div>
          <div className="pie_chart">
            <Barchart chartData={userData} />
          </div>
        </div>
      </div>
      <div className="home_right_conatiner">
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
      </div>
    </div>
  );
}

export default Home;
