import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./ScarchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e098fc9a335a2d9b1517e121472e4083";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=API_KEY")

    let getWeatherInfo = async () => {
        try{
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            //console.log(jsonResponse); 
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch(err){
            throw err;
        }
        
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    }
    return (
        <div className="SearchBox">
           
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined" 
                    required 
                    value={city}
                    onChange={handleChange}
                    style={{backgroundColor: "yellow"}}
                />
                <br></br><br></br>
                <Button variant="contained" type="submit">
                Scarch
                </Button>
                {error && <p style={{color: "black"}}><b>No Such place in our API!</b></p>}
            </form>
        </div>
    );
}