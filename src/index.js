import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './styles/index.scss'

ReactDom.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root')
)
