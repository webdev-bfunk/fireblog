import './index.css'
import { Route, Routes } from "react-router-dom"
import Demo from "./components/Demo/Demo"
import DemoHeader from "./components/Demo/DemoHeader"
import Home from "./components/Home/Home"
import HomeHeader from "./components/Home/HomeHeader"

function App() {
  const auth = false;

  return (
    <div className="">
    {auth ? <HomeHeader /> : <><DemoHeader /><Demo /></>}
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/demo" element={ <Demo />} />
      </Routes>
    </div>
  )
}

export default App
