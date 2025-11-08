import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./infoBox.css"
import WeatherApp from "./weatherApp";
import updateInfo from "./weatherApp"

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1748701821466-0b9f8bf839ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2302";

  return (
    <div className="infoContainer">
      {/* <h1>Weather Info - {info.weather}</h1> */}
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 140 }} image={INIT_URL} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            component={"span"}
            sx={{ color: "text.secondary" }}
          >
            <p>Temperature:- {info.temp}&deg;C</p>
            <p>Humidity:- {info.humidity}</p>
            <p>Min Temp:- {info.tempMin}</p>
            <p>Max Temp:- {info.tempMax}</p>
            <p>the Weather can be described as <b>{info.weather}</b>  and feels like {" "}<b>{info.feelslike}&deg;C</b></p>
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>
  );
}