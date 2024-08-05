import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'; 
import { QueryClient, QueryClientProvider } from 'react-query'
import GlobalStyles from'./GlobalStyles.js';

const queryClient = new QueryClient()
await onready();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <BrowserRouter>
     <GlobalStyles/>
        <App />
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)
