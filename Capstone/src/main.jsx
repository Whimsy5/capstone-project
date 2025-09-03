import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'


import ReactDOM from 'react-dom/client';
import ReserveTable from './components/ReserveTable.jsx';
import Confirmed from './components/Confirmed.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>


      <App />
      



    </BrowserRouter>



  </StrictMode>
)
