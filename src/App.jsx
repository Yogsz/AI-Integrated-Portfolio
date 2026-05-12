import React from "react"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar/>
      <Hero/>
    </div>
    
  )
}

export default App