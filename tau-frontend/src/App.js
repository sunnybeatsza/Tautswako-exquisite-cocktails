import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Contact } from "./Pages/Contact";
import { Quote } from "./Pages/Quote";
import { Services } from "./Pages/Services";
import { AboutUs } from "./Pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Quote" element={<Quote />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/About-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
