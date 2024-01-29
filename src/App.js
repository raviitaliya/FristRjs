import { Routes, Route, Navigate } from "react-router-dom";
import {Home} from "./pages/home/Home"
import {Aboutus} from "./pages/about_us/Aboutus"
import { Features } from "./pages/features/Features";
import { Contact } from "./pages/contact/Contact";

export default function App(){
  return(
    <>
  
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about-us" element={<Aboutus/>}/>
      <Route path="/Features" element={<Features/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/help/*" element={<Navigate to={"/Contact"} />}/>
    </Routes>
    </>
  )
} 