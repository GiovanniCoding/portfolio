import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";

import { Portfolio } from './Portfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
)
