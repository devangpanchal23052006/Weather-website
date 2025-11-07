import "./SearchBox.css"
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox() {
    let [city, setCity] = useState("");
    const API_URL="";
    const API_KEY="0f7321f223d93e2d78c6b6f90b816b3b";

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
    }

  return (
    <div className="SearchBox">
      <h1>Search for weather</h1>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
        &nbsp;&nbsp;&nbsp;
        <Button variant="contained" style={{marginTop:"0.5rem"}} type="submit">Search</Button>
      </form>
    </div>
  );
}
