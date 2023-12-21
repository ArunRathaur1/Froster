import './App.css';
import NevBar from './component/NevBar'
import Footer from './component/footer';
import About from './component/Pages/About';
import Home from './component/Pages/Home';
import TextAnylise from './component/Pages/TextAnyliser';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sigin from './component/Pages/Signin';
import Login from './component/Pages/Login';
function App() {
  return (
    <>
  
    <BrowserRouter>
    <NevBar></NevBar>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path="/signin" element={<Sigin></Sigin>}></Route>
      <Route path="//textanalier" element={<TextAnylise></TextAnylise>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
    <Footer></Footer>
    
    </>
  );
}

export default App;
