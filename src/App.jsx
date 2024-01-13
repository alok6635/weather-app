import { useRef, useState } from 'react';
import './App.css';
import ShowTemp from './components/ShowTemp';
import Forecast from './components/ForeCast';


const App = () => {
  const inpRef = useRef();
  const [city, setCity] = useState(undefined);
  const[toggleText,setToggleText]=useState('fahrenheit')
  const[changeToggle,setChangleToggle]=useState(false)
  const[apiUnits,setApiUnits]=useState('imperial');
  const[temp,setTemp]=useState('°F')
  const[windSpeed,setWindSpeed]=useState('miles/hour')


  const handleAdd = () => {
    setCity(inpRef.current.value)
   
  }


  const handleBtn=(e)=>{
    console.log(changeToggle);
    setChangleToggle(!changeToggle)
     if(!changeToggle){
      setToggleText('celsius')
      setApiUnits('metric')
      setTemp('°C')
      setWindSpeed('meter/sec')
     }
     else{
      setToggleText('fahrenheit')
      setApiUnits('imperial')
      setTemp('°F')
      setWindSpeed('miles/hour')
     }



    
  }

    return (
      <>
      {
      city && <div className='toogleBtn'><span>Switch :</span>  <button  onClick={handleBtn}>{toggleText}</button></div> 
      }

        <div className="weatherWrapper">
          <div className='serachPannel'>
          <h1>Weather App</h1>
          <div className="flex">
            <input type="text" placeholder="please enter city name"  ref={inpRef} />
            <button type="submit" className="btn btn-danger" onClick={handleAdd}>
              Get Temp
            </button>
          </div>
          </div>
         
       
        
            {
              city && <ShowTemp city={city}  endpoint={'weather'} unit={apiUnits} temp={temp} windSpeed={windSpeed}/>
            }
            {
          city &&  <Forecast city={city}  endpoint={'forecast'} unit={apiUnits} temp={temp}/>
         }
  
         
        </div>
      </>
    );
  };

  export default App;
