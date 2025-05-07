import { useState, useEffect } from "react";
import styled from "styled-components";
import BillDetails from "./BillDetails";
import { mealKits } from "../data/mealKits";
import MealKitCard from "../components/MealKitCard";
import { toast } from "react-toastify";
import { groceries } from "../data/groceries";

const CartContainer = styled.div`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const CartTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
`;

const EmptyMessage = styled.p`
  font-size: 1.25rem;
  margin-top: 2rem;
  color: #666;
  text-align: center;
`;

const CartGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ItemCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 14px;
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  flex-wrap: wrap;
`;

const ItemImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid #eee;
`;

const ItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex: 1;
`;

const ItemName = styled.h2`
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  margin: 0 0 6px 0;
`;

const ItemPrice = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 10px;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  background-color: #f4a106;
  color: #fff;
  border: none;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: #dd9005;
  }
`;

const QuantityText = styled.span`
  font-size: 1.05rem;
  font-weight: 500;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  margin-left: auto;
  transition: background 0.2s ease-in;

  &:hover {
    background-color: #d93636;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  justify-items: center;
  margin-top: 24px;
`;

const TotalBill = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2.5rem;
  text-align: right;
  color: #222;
  border-top: 1px solid #eee;
  padding-top: 1rem;
`;

const CartPage = () => {
  const [cartItem, setCartItem] = useState<any[]>([]);


  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const savedCart = storedCart ? JSON.parse(storedCart) : [];
    setCartItem(savedCart);
  }, []);

  const updateLocalStorage = (updatedCart: any[]) => {
    setCartItem(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemove = (id: string) => {
    const updatedCart = cartItem.filter((item) => item.id !== id);
    updateLocalStorage(updatedCart);
  };

  const increaseQuantity = (id: string) => {
    const updatedCart = cartItem.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
    );
    updateLocalStorage(updatedCart);
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cartItem.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateLocalStorage(updatedCart);
  };

  const total = cartItem.reduce((acc, item) => {
    const price = Number(item.price);
    const quantity = Number(item.quantity) || 1;
    return acc + price * quantity;
  }, 0);

  const handleAddKit = (ingredients: any[], kitName: string) => {
    const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
  
    ingredients.forEach((ingredient: any) => {
      const existingItem = currentCart.find((item: any) => {
        return (
          (item.id && ingredient.id && item.id === ingredient.id) ||
          item.name === ingredient.name
        );
      });
  
      if (existingItem) {
       
        if (existingItem.source) {
          if (Array.isArray(existingItem.source)) {
            if (!existingItem.source.includes(`Meal Kit: ${kitName}`)) {
              existingItem.source.push(`Meal Kit: ${kitName}`);
            }
          } else {
            existingItem.source = [existingItem.source, `Meal Kit: ${kitName}`];
          }
        } else {
          existingItem.source = [`Meal Kit: ${kitName}`];
        }
      } else {
        
        currentCart.push({
          ...ingredient,
          quantity: 1,
          source: [`Meal Kit: ${kitName}`],
        });
      }
    });
  
    localStorage.setItem("cart", JSON.stringify(currentCart));
    toast.success(`${kitName} added to cart!`);
    window.dispatchEvent(new Event("storage"));
  };
  
  const groceryImage = (id: string) => {
    const groceryItem = groceries.find((g) => g.id === Number(id));
    return groceryItem ? groceryItem.image : '';
  }

  return (
    <CartContainer>
      <CartTitle>Review Cart</CartTitle>
      <h3
        style={{
          marginBottom: "2rem",
          color: "#e91123",
          fontSize: "0.75rem",
        }}
      >
        *All product prices are listed per kilogram (kg) or per liter (L),
        unless otherwise specified.
      </h3>
      {cartItem.length === 0 ? (
        <EmptyMessage>Your cart is empty.</EmptyMessage>
      ) : (
        <>
          <CartGrid>
            {cartItem.map((item) => (
              <CartItem key={item.id}>
                <ItemCard>
                  <ItemImage src={item.image || groceryImage(item.id)} alt={item.name} />
                  <ItemDetails>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>Rs {item.price}</ItemPrice>
                    <QuantityControls>
                      <QuantityButton
                        onClick={() => decreaseQuantity(item.id)}
                      >
                        -
                      </QuantityButton>
                      <QuantityText>{item.quantity}</QuantityText>
                      <QuantityButton
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </QuantityButton>
                    </QuantityControls>
                  </ItemDetails>
                  <RemoveButton onClick={() => handleRemove(item.id)}>
                    Remove
                  </RemoveButton>
                </ItemCard>
              </CartItem>
            ))}
          </CartGrid>
          <TotalBill>Total: Rs {total.toFixed(2)}</TotalBill>
          <h2 style={{ marginTop: '2.5rem', color:'#7b241c', textAlign:'center'}}>Fresh Flavors, Easy Prep – Meal Kits You’ll Love</h2>
            <Grid>
            {mealKits.map((kit) => (
            <MealKitCard
              key={kit.id}
              kit={kit}
              onAddKit={() =>
                handleAddKit(kit.ingredients, kit.name)
              }
            />
          ))}
            </Grid>
          <BillDetails cartItems={cartItem} />
        </>
      )}
    </CartContainer>
  );
};

export default CartPage;

