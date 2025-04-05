
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { Providers } from './providers/Providers'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <Toaster position="top-right" />
      <App />
    </Providers>
  </React.StrictMode>,
)