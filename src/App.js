import React, {useState, useCallback} from 'react';
import axios from 'axios';
import { MapComponent } from './MapComponent';

const App = () => {
  const [dataApi, setDataApi] = useState({ isLoadingApi: false, errorApi: false, data: {} })

  const fetchData = useCallback(async (coord) => {
    setDataApi({ ...dataApi, isLoadingApi: true })
    try {
      const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lng}&units=metric&appid=094080442761c029747e0c8ec0ed88e6`)
      setDataApi({ ...dataApi, isLoadingApi: false, errorApi: false, data })
      console.log(data)
    } catch (error) {
      setDataApi({ ...dataApi, isLoadingApi: false, errorApi: error?.message })
    }
  }, [dataApi])

  const handleOnClickMap = (coords) => {
    fetchData(coords)
  }

  return (
    <>
      <MapComponent 
        onClickMap={handleOnClickMap}
      />
     <div>
      <h2>Weather and location data</h2>
      {dataApi.errorApi && <div><span>⚠ {dataApi.errorApi} ⚠</span></div>}
      <div>
        <div>
          {
            dataApi.isLoadingApi
              ? <span>Cargando...</span>
              : (
                <span>
                  <span>{dataApi.data?.name}</span>
                  <br />
                  <span>
                    {dataApi.data?.main?.temp || 0} °C
                  </span>
                </span>
              )
          }
        </div>
        {
          (Object.keys(dataApi.data).length > 0 && !dataApi.isLoadingApi) && (
            <div>
              <ul>
                {
                  Object.keys(dataApi.data?.main).map((elem, i) => {
                    return (<li key={i}>{elem}: {dataApi.data?.main[elem]}</li>)
                  })
                }
                {
                  Object.keys(dataApi.data?.coord).length > 0 && Object.keys(dataApi.data?.coord).map((elem, i) => {
                    return (<li key={i}>{elem}: {dataApi.data?.coord[elem]}</li>)
                  })
                }
              </ul>
            </div>
          )
        }
      </div>
    </div>
    </>
  )
}

export default App