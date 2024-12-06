import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {SidebarProvider} from './components/ui/sidebar.tsx'
import SideBar from './components/Side.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarProvider>
      <SideBar/>
      <App />
      </SidebarProvider>
  </StrictMode>,
)
