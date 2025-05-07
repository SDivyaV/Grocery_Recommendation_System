import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import GrocerySection from "./GrocerySection";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItemCount(cart.length);
  },[]);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCartItemCount(updatedCart.length);
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [])

  return (
    <>
      <Header cartItemCount={cartItemCount} onCartClick={() => navigate('/cart')} />
      <NavigationBar />
      <Outlet />
      <ToastContainer position="top-right" autoClose={1000}/>
      {location.pathname === "/" && <GrocerySection />}
      <Footer />
    </>
  );
};

export default Layout;
