import React, { useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function App() {
  const [city, setCity] = useState("");
  const [temps, setTemps] = useState([]);
  const [labels, setLabels] = useState([]);

  const API_KEY = "32543ba802f1bce9bd6816e1debba872"; // <-- put your key

  const getWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const data = res.data.list.slice(0, 8);

      setTemps(data.map(item => item.main.temp));
      setLabels(data.map(item => item.dt_txt));
    } catch (err) {
      alert("City not found");
    }
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temps,
        borderWidth: 2
      }
    ]
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Weather App</h2>

      <input
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>

      {temps.length > 0 && (
        <div style={{ width: "80%", margin: "auto" }}>
          <Line data={chartData} />
        </div>
      )}
    </div>
  );
}

export default App;