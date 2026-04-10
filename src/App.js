
import { Box } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Home from "./Components/Home";
import Order from "./Components/Order";
import Main from "./Components/Main";
import { AlertProvider } from "./context/alertContext";
import ConfirmedBooking from "./Components/ConfirmedBooking";



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
              <Route path="/reservation" element={<Main />} />
              <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
          </Box> 
        <Footer />   
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
