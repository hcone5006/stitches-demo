import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Home from "./Pages/Home/Home.jsx";
import ChartPage from './Pages/ChartPage/ChartPage';

function App() {
  
  return (
    <>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<ChartPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
