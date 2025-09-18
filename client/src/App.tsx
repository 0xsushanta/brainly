import React from 'react'
import Dashboard from './components/pages/Dashboard'
import { Signup } from './components/pages/Signup'
import { Signin } from './components/pages/Signin'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/signup' element={<Signup />}/>
       <Route path='/signin' element={<Signin />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
  </Routes>
  </BrowserRouter>
}

export default App
