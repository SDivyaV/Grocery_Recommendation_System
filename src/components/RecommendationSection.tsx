import React from "react";
import { getRecentlyViewed } from "../utils/localStorageUtils";
import { groceries, GroceryItem } from "../data/groceries";
import styled from "styled-components";

const RecommendationSection: React.FC = () => {
  const recentlyViewed: GroceryItem[] = getRecentlyViewed();

  const recommendedItems = groceries.filter((item) => {
    return recentlyViewed.some(
      (viewed) =>
        item.id !== viewed.id &&
        (item.category === viewed.category ||
          Math.abs(item.price - viewed.price) < 20)
    );
  });

  const SectionContainer = styled.section`
    padding: 2rem;
  `;

  const Title = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #333;
  `;

  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1.5rem;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `;

  const Card = styled.div`
    background-color: #fff;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }
  `;

  const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
  `;

  const Info = styled.div`
    margin-top: 0.5rem;
  `;

  const Name = styled.p`
    font-weight: 600;
    margin-bottom: 0.25rem;
  `;

  const Price = styled.p`
    color: #28a745;
    font-weight: bold;
  `;

   const Button = styled.button`
    margin-top: 0.5rem;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  `; 

  const handleAddToCart = (item: GroceryItem) => {
    const viewed = getRecentlyViewed();
    const updatedView = [item, ...viewed.filter(v => v.id !== item.id)].slice(0, 10);
    localStorage.setItem("recentlyViewed", JSON.stringify(updatedView));

    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  return (
    <SectionContainer>
      <Title>Recommended for You</Title>
      <Grid>
        {recommendedItems.map((item) => (
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
    </SectionContainer>
  );
};

export default RecommendationSection;
