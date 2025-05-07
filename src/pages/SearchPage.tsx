// src/pages/SearchPage.tsx
import { useLocation } from "react-router-dom";
import { groceries, GroceryItem } from "../data/groceries";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { toast } from "react-toastify";


const SearchPage = () => {
  const query = new URLSearchParams(useLocation().search);
  const searchTerm = query.get("q")?.toLowerCase() || "";

  const filteredItems = groceries.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  const [cart, setCart] = useState<GroceryItem[]>(() => {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  const [lastAdded, setLastAdded] = useState<any | null>(null);


  const handleAddToCart = (item: any) => {
    setCart((prev: any[]) => {
      const updatedCart = [...prev, item];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });

    setLastAdded(item);

    toast.success(`${item.name} added to cart`);

    window.dispatchEvent(new Event("storage"));
  }

  

  return (
    <div>
      <h2 style={{ marginLeft: "0.85rem", marginTop:"0.75rem", textAlign:"center"}}>Search Results for "{searchTerm}"</h2>
      {filteredItems.length > 0 ? (
        <div className="product-grid">
          {filteredItems.map((item) => (
            <ProductCard key={item.id} item={item} onAddToCart={handleAddToCart}/>
          ))}
        </div>
      ) : (
        <p>No matching products found.</p>
      )}
      
    </div>
  );
};

export default SearchPage;
