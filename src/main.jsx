import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './reset.css'
import './style.css'
import "./header.css"
import "./reset.css"
import "./App.css"
import "./character-cards.css"
import "./index.css"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
