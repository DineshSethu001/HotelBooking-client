import React from 'react'
import Navbar from './components/Navbar'
import { useLocation, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {  
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className="home min-h-[70vh]">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </div>
    </div>
  )
}

export default App