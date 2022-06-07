import { useState } from "react";
import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"





function App() {

  const [temperature, setTemperature] = useState<number | null>(null);
  const [min, setMin] = useState<number | null>(null);
  const [max, setMax] = useState<number | null>(null);

  const city = 'Sao Paulo';

// Usa-se o THEN toda vez que não se sabe o tempo que a requisição irá demorar
fetch(`http://api.weatherapi.com/v1/current.json?key=c71862c03ad14fa68d2184712220706&q=${city}&lang=pt`)
.then((response) => response.json())
.then((data) => setTemperature(data.current.temp_c))

fetch(`http://api.weatherapi.com/v1/forecast.json?key=c71862c03ad14fa68d2184712220706&q=${city}&lang=pt`)
.then((response) => response.json())
.then((data) => setMin(data.forecast.forecastday[0].day.mintemp_c.toFixed()))

fetch(`http://api.weatherapi.com/v1/forecast.json?key=c71862c03ad14fa68d2184712220706&q=${city}&lang=pt`)
.then((response) => response.json())
.then((data) => setMax(data.forecast.forecastday[0].day.maxtemp_c.toFixed()))


  return (

    <>
      <GlobalStyle/>
      <Header />
      <Card
      temperature={temperature}
      min={min}
      max={max}
      />
    </>
  )
}

export default App
