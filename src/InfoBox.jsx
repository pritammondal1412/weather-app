import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
/*
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
                    city name befor
                            {" "} {
                                info.humidity > 80 ?(
                                    <ThunderstormIcon />
                                ): info.temp > 20 ? (
                                    <WbSunnyIcon />
                                ) : ( 
                                    <AcUnitIcon />
                            )}
*/


export default function InfoBox({ info }) {
    const HOT_URL = "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1669047374226-b1488598daa8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=1024x1024&w=is&k=20&c=NyB7w-uFLH5DvfzVARNmAx9lofieWs5m4f7_pEm_ly0=";
    return (
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        info.humidity > 80 
                        ? RAIN_URL 
                        : info.temp > 20 
                        ? HOT_URL 
                        : COLD_URL 
                    }
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        
                            <b>{info.city}</b> 
                            
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component= "span">
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}&deg;C</p>
                        <p>Minimun Temperature = {info.tempMin}</p>
                        <p>Maximun Temperature = {info.tempMax}</p>
                        <p>The weather feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                
                </Card>
            </div>
    )
}