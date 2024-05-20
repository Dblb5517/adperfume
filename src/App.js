import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Blog from "./components/blog/Blog";
import { useState } from "react";


function App() {
  const [searchValue,setSearchValue] = useState('');
  return (
    <div className="App">
      <BrowserRouter>
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="https://adperfume.store" element={<Home />} />
          <Route path="/shop" element={<Shop searchValue={searchValue} />} />
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