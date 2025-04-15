import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './pages/Tasks'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
