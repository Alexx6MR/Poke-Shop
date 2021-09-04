import React from 'react'
import RouterViews from './router'
import NavBar from './components/TheNavBar'
import {GlobalProvider} from './context/globalProvider'

function App() {

  return (
    <div className="bg-gradient-to-r from-indigo-400 to-green-500 min-h-screen max-h-auto">
       
      <GlobalProvider>

          <NavBar />

          <RouterViews />

      </GlobalProvider>
       
    </div>
  )
}

export default App
