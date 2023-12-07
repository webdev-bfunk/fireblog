import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Demo from "./components/Demo/Demo";
import DemoHeader from "./components/Demo/DemoHeader";
import Home from "./components/Home/Home";
import HomeHeader from "./components/Home/HomeHeader";

function App() {
  const currentUser = false;

  return (
    <div className="">
      {currentUser ? (
        <HomeHeader />
      ) : (
        <DemoHeader />
      )}
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/demo" element={<Demo />} />}
        <Route path="*" element={<Navigate to={ !currentUser ? "/demo" : "/" }/>} />
      </Routes>
    </div>
  );
}

export default App;
