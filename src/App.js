import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import Projects from "./Pages/Projects/Projects";
import References from "./Pages/References/Referenes";
import Navigation2 from "./Components/Layout/Navigation/Navigation2";
import Quote from "./Pages/Quote/Quote";
import SingleWork from "./Pages/Services/SingleWork";
import Footer from "./Components/Layout/Footer";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navigation2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<References />} />
          <Route path='/quote' element={<Quote />} />
          <Route path='/services/works' element={<SingleWork />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
