// main.jsx
// Entry point for the React application. It renders the `App`
// component inside a StrictMode wrapper into the DOM element with
// id "root". Global styles are imported here as well.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
