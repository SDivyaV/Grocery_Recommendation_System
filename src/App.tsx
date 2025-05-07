import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HeroSection from "./components/HeroSection"
import About from "./pages/About"
import Contact from "./pages/Contact"
import CategoriesPage from "./pages/CategoriesPage"
import CartPage from "./pages/CartPage"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import SearchPage from "./pages/SearchPage"
import HeroSlider from "./components/HeroSlider"
/* import { Navigate } from "react-router-dom" */


function App() {
  return (
     <>
       <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<HeroSection />} /> */}
          <Route index element={<HeroSlider />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/category" element={<Navigate to="/category/Fruits" />} /> */}
          <Route path="/category/:category" element={<CategoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/search" element={<SearchPage />} />
          
        </Route>
      </Routes>
      <ToastContainer position="top-right" autoClose={1000}/>
     </>
  )
}

export default App
