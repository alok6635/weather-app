const ShowTemp = ({ text }) => {
    return (
        <>
            <div className="container my-5">
                <div className="row mb-2">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Current Temp</h5>
                                <p className="card-text">{text.temp}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Min. Temp.</h5>
                                <p className="card-text">{text.temp_min}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Max. Temp.</h5>
                                <p className="card-text">{text.temp_max}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Humidity</h5>
                                <p className="card-text">{text.humidity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row mb-2">
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Wind Speed</h5>
                                <p className="card-text">{text.wind.speed} m/s</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Wind Direction</h5>
                                <p className="card-text">{text.wind.deg}&deg;</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Description</h5>
                                <p className="card-text">{text.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Weather Icon</h5>
                                <img
                                    src={`http://openweathermap.org/img/w/${text.icon}.png`}
                                    alt={text.description} width={20} height={20}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ShowTemp;