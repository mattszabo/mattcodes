// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import MattCodesApp from './components/MattCodesApp'
import './style.scss'

ReactDOM.render(
  <BrowserRouter>
    <MattCodesApp />
  </BrowserRouter>,
  document.getElementById('root')
)
