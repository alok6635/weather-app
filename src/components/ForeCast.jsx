import UseAxios from './UseAxios';

const Forecast = ({ city, endpoint, unit, temp }) => {
  let url = `https://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=06d4310b7f63d4c98211cc3820afbfcd&mode=json&units=${unit}`
  const {data, error } = UseAxios(url, city, endpoint, unit)

  console.log(data);

  let result = data?.list.filter((item) => {
    return item.dt_txt.includes('06:00:00');
  })


  return (
    <>
      {
        error ? <h2 ></h2> :

          <div className="container my-5">
            <h2>5-Day Forecast</h2>
            <ul className="flex-wrap listData">
              {result?.map((item) => (
                <li key={item.dt}>
                  <h5 className="card-title">{new Date(item.dt * 1000).toLocaleDateString()}</h5>
                  <p className="card-text">Avg Temp: {item.main.temp}
                    <span>{temp}</span>
                  </p>
                  <p className="card-text">Description: {item.weather[0].description}</p>
                  <img
                    src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
                    alt={item.weather[0].description}
                    width={30}
                    height={30}
                  />
                </li>
              ))}
            </ul>
          </div>
      }
    </>

  );
};

export default Forecast;
