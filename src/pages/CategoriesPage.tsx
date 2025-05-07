import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { groceries } from "../data/groceries";
import styled from "styled-components";
import { toast } from "react-toastify";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 0.8rem;
`;

const Name = styled.h3`
  font-size: 1rem;
  font-weight: 600;
`;

const Price = styled.p`
  color: black;
  font-weight: semi-bold;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  margin-top: 8px;
  padding: 8px 12px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: #218838;
  }
`;

const Section = styled.div`
  margin-top: 2rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  color: #ffa602;
`;

const CategoryNav = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const CategoryLink = styled(Link)<{ active?: boolean }>`
  padding: 8px 14px;
  border-radius: 8px;
  text-decoration: none;
  background-color: ${(props) => (props.active ? "#007bff" : "#f0f0f0")};
  color: ${(props) => (props.active ? "white" : "#333")};
  font-weight: 500;

  &:hover {
    background-color: ${(props) => (props.active ? "#0056b3" : "#ddd")};
  }
`;

const SmallImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-bottom: 1px solid #f0f0f0;
`;

const CategoriesPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [lastAdded, setLastAdded] = useState<any | null>(null);
  const [cartItem, setCartItem] = useState<any | null>(null);

  const filteredItems = groceries.filter((item) => item.category === category);

  const handleAddToCart = (item: any) => {
    
    const itemQuantity = {...item, quantity: 1};

    setCartItem((prev: any) => {
      const updatedCart = [...(prev || []), itemQuantity];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    setLastAdded(itemQuantity);
  
    toast.success(`${item.name} added to cart!`);
    window.dispatchEvent(new Event("storage"));
  };

  /* const handleAddAgain = (item: any) => {
    setCartItem((prev: any) => {
      const updatedCart = [...(prev || []), { ...item, id: new Date().getTime() }];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });

    toast.success(`${item.name} added to cart!`);
  
    window.dispatchEvent(new Event("storage"));
  }; */

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    const savedCart = storedCart ? JSON.parse(storedCart) : [];
    setCartItem(savedCart);
  }, []);

  const recommendations =
    lastAdded && lastAdded.category === category
      ? filteredItems.filter(
          (item) =>
            item.id !== lastAdded.id &&
            /* (Math.abs(item.price - lastAdded.price) <= 30 ||
            item.category === lastAdded.category) */
            item.price >= lastAdded.price &&
            item.price <= lastAdded.price + 30
        )
      : [];

  const categories = ["Fruits", "Vegetables", "Grains", "Dairy"];

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ marginBottom: "0.85rem", color: "#FFAC1C" }}>
        Category: {category}
      </h2>
      <h3
        style={{ marginBottom: "2rem", color: "#e91123", fontSize: "0.75rem" }}
      >
        *All product prices are listed per kilogram (kg) or per liter (L),
        unless otherwise specified.
      </h3>

      <CategoryNav>
        {categories.map((cat) => (
          <CategoryLink
            key={cat}
            to={`/category/${cat}`}
            active={cat === category}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </CategoryLink>
        ))}
      </CategoryNav>

      <Grid>
        {filteredItems.map((item) => (
          <Card key={item.id}>
            <Image src={item.image} alt={item.name} />
            <Info>
              <Name>{item.name}</Name>
              <Price>Rs {item.price}</Price>
              <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </Info>
          </Card>
        ))}
      </Grid>

      {lastAdded && recommendations.length > 0 && (
        <Section>
          <Title>Explore similar {category}:</Title>
          <Grid>
            {recommendations.map((item) => (
              <Card key={item.id}>
                <SmallImage src={item.image} alt={item.name} />
                <Info>
                  <Name>{item.name}</Name>
                  <Price>Rs {item.price}</Price>
                  <Button onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </Button>
                </Info>
              </Card>
            ))}
          </Grid>
        </Section>
      )}
    </div>
  );
};

export default CategoriesPage;
