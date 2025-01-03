import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Css links
import './index.css'
// Components
import { App } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
