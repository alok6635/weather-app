import UseAxios from "./UseAxios";

const ShowTemp = ({ city, endpoint, unit, temp, windSpeed }) => {
    let url = `http://api.openweathermap.org/data/2.5/${endpoint}?q=${city}&appid=06d4310b7f63d4c98211cc3820afbfcd&mode=json&units=${unit}`
    const { data, error } = UseAxios(url, city, endpoint, unit)

    return (
        <>

            {
                error ? <h2 className="error">{error}</h2> :
                    <div>
                        <div className="container my-5">
                            <ul className="flex-wrap listData">
                                <li>
                                    <h5 className="card-title">Current Temp</h5>
                                    <p className="card-text">{data?.main.temp}
                                        <span>{temp}</span>
                                    </p>
                                </li>
                                <li><h5 className="card-title"> Min. Temp.</h5>
                                    <p className="card-text">{data?.main.temp_min}
                                        <span>{temp}</span>
                                    </p>
                                </li>

                                <li>
                                    <h5 className="card-title"> Max. Temp.</h5>
                                    <p className="card-text">{data?.main.temp_max}
                                    <span>{temp}</span>
                                    </p>

                                </li>
                                <li>
                                    <h5 className="card-title">Humidity</h5>
                                    <p className="card-text">{data?.main.humidity}</p>
                                </li>
                                <li>
                                    <h5 className="card-title">Wind Speed</h5>
                                    <p className="card-text">{data?.wind.speed}
                                        <span> {windSpeed} </span>
                                    </p>
                                </li>
                                <li>
                                    <h5 className="card-title">Wind Direction</h5>
                                    <p className="card-text">{data?.wind.deg}&deg;</p>
                                </li>
                                <li>
                                    <h5 className="card-title">Description</h5>
                                    <p className="card-text">{data?.weather[0].description}</p>
                                </li>
                                <li>
                                    <h5 className="card-title">Weather Icon</h5>
                                    <img
                                        src={`http://openweathermap.org/img/w/${data?.weather[0].icon}.png`}
                                        alt={data?.weather[0].description} width={20} height={20}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
            }
        </>
    )
}

export default ShowTemp;