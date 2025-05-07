import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { theme } from './theme/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ThemeProvider theme={theme}>
      <BrowserRouter basename='/Grocery_Recommendation_System'>
        <App />
      </BrowserRouter>
   </ThemeProvider>
  </StrictMode>,
)
