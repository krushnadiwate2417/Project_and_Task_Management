import { createContext, useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './pages/Tasks'
import GlobalContext from './context/GlobalContext'
import ProceedPage from './pages/ProceedPage'
import LoginSignUp from './pages/LoginSignUp'

function App() {


  const [isAdmin,setIsAdmin] = useState(false);

  return (
    <>
      <GlobalContext.Provider value={
        {isAdmin,setIsAdmin}
      }>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<ProceedPage/>}/>
          <Route path='/user' element={<LoginSignUp/>}/>
          <Route path='/admin' element={<LoginSignUp/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/tasks' element={<Tasks/>}/>
        </Routes>
      </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
