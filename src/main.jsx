import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ToDoInput } from './components/ToDoInput'
import { Portal } from './components/Portal'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portal />
    <ToDoInput />
  </StrictMode>,
)

