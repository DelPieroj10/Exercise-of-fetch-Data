import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { FetchDataApp } from './Fetch_DataApp'
import './Stylesheet/exercise_style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchDataApp />
  </StrictMode>,
)
