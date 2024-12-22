import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx'
import HeaderFooterProvider from './context/HeaderFooterContext.jsx'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
		<AuthProvider>
			<HeaderFooterProvider>
				<App />
			</HeaderFooterProvider>
		</AuthProvider>
  </BrowserRouter>
)