import { useState } from "react";
import './app.css'
import axios from "axios";
import ShowTemp from "./components/ShowTemp";
import ForeCast from "./components/ForeCast";

const App = () => {
    const[city,setCity]=useState('');
    const[data,setData]=useState(
      {
        description:'',
        temp:0,
        temp_max:0,
        temp_min:0,
        humidity:0,
        wind: { speed: 0, deg: 0 },
        country:'',
        icon: '',
      }
      )



const handleAdd=()=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=06d4310b7f63d4c98211cc3820afbfcd`)
    .then((res)=>{
      console.log(res);
      setData({
        description:res.data.weather[0].description,
        temp:res.data.main.temp,
        temp_max:res.data.main.temp_max,
        temp_min:res.data.main.temp_min,
        humidity:res.data.main.humidity,
        wind: { speed: res.data.wind.speed, deg: res.data.wind.deg },
        country:res.data.sys.country,
        icon: res.data.weather[0].icon,
      })
      setCity('')
    })
}

  return (
    <>
    <div className="weatherWrapper">
    <h5>Weather App</h5>
    <div className="flex">
    <input type="text" placeholder="please enter city name" onChange={(e)=>setCity(e.target.value)} value={city}/>
    <button type="submit" className="btn btn-danger " onClick={handleAdd}>get temp</button>
    </div>
    <div>
      <ShowTemp text={data}/>
      <ForeCast/>
    </div>
    </div>

    </>
  )
}

export default App;