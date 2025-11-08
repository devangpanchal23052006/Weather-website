import "./SearchBox.css"; 
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import updateInfo from "./weatherApp"

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b79472351c0b22e34b7ac976edf68d81";

  const getWeatherInfo = async () => {
    if (!city.trim()) return; // avoid empty search
    try {
      const query = encodeURIComponent(city.trim());
      const response = await fetch(
        `${API_URL}?q=${query}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        // specific error messages
        if (response.status === 401) {
          console.error("❌ Invalid or unauthorized API key.");
          alert("Your OpenWeatherMap API key may be invalid or expired.");
        } else if (response.status === 404) {
          alert("City not found. Please try another name.");
        } else {
          console.error("Weather API error:", response.status, response.statusText);
          alert("Something went wrong. Please try again.");
        }
        return;
      }

      const jsonResponse = await response.json();
      console.log("✅ Weather data:", jsonResponse);
      let result = {
        city : city,
        temp : jsonResponse.main.temp,
        tempMin : jsonResponse.main.temp_min, 
        tempMax : jsonResponse.main.temp_max,
        humidity : jsonResponse.main.humidity,
        feels_like : jsonResponse.main.feels_like,
        weather : jsonResponse.weather[0].description, 
      }
      console.log(result);
      return result; 
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error! Please check your connection.");
    }
  };

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCity(""); // c lear after fetching
    console.log(` city name for weather:-${city}`)
    let newInfo =   await getWeatherInfo();
    updateInfo(newInfo);
  };

  return (
    <div className="SearchBox">
      <h1>Search for weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        &nbsp;&nbsp;&nbsp;
        <Button
          variant="contained"
          style={{ marginTop: "0.5rem" }}
          type="submit"
        >
          Search
        </Button>
      </form>
    </div>
  );
}
