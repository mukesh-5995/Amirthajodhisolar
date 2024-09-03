import React from "react";
import NavBar from "./components/NavBar";
import SliderComponent from "./components/Slider";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <SliderComponent />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
