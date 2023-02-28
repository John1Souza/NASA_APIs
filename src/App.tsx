import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Api } from "./components/Api/Apis";
import { About } from "./components/Pages/About";
import { Contacts } from "./components/Pages/Contacts";

import './Styles/Global.scss'



export function App() {
  
  
  return (
    <Router>
      <Navbar />
      <Routes >        
        <Route path='/' element={ <Home />} />  
        <Route path='/Api' element={ <Api />} />  
        <Route path='/About' element={ <About />} />  
        <Route path='/Contacts' element={ <Contacts />} />  
      </Routes>
    </Router>
  );
}


