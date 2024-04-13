import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="https://adperfume.store" element={<Home />} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;