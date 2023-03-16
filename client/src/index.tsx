import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(<App />)

serviceWorkerRegistration.register()
reportWebVitals()