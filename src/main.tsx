import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ParaisoApp from './ParaisoApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParaisoApp />
  </StrictMode>,
)
