import { useEffect, useState } from "react";
import axios from "axios";

const UseAxios=(url,city,endpoint,unit)=>{

  const[loading,setLoading]=useState(false)
  const[error,setError]=useState(null);
  const[data,setData]=useState(null)

  const fetchForecastData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setError(error.response.data.message)
      console.error('Error fetching forecast data:', error);
    }
  };

    useEffect(() => {
        fetchForecastData();
      }, [city,endpoint,unit]);


    return(
       {loading,error,data}
    )
}

export default UseAxios;
