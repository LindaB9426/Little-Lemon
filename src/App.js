import { ChakraProvider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Login from "./Components/Login";
import Reservation from "./Components/Reservation";
import Main from "./Components/Main";
import { AlertProvider } from "./context/alertContext";
import Alert from "./Components/Alert";




function App() {
  return (
    
    <BrowserRouter>
      <AlertProvider>
        <Header />
          <Box mt="100px">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              
              <Route path="/order" element={<Order/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/reservation" element={<Main />} />
              
            </Routes>
          </Box> 
        
        <Footer />   
       
      
      </AlertProvider>
    </BrowserRouter>
   
  );
}

export default App;
