import { useEffect, useState } from "react";
import { Card } from "./components/Card"
import { Header } from "./components/Header"
import { api } from "./services/api";
import { GlobalStyle } from "./styles/global"

interface InformationsProps {
  temperature: number,
  min: number,
  max: number
}

function App() {
  return (

    <>
      <GlobalStyle/>
      <Header />
      <Card />
    </>
  )
}

export default App
