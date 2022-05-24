import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createServer } from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/informations', ()=> [
        {
          temperature: 25,
          min: 12,
          max: 27
        }
      ]
    )
  }
})


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
