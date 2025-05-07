import styled from "styled-components";
import { GroceryItem } from "../data/groceries";

type Props = {
  item: GroceryItem;
  onAddToCart: (item: GroceryItem) => void;
};

const Card = styled.div`
  border: 1px solid #ddd;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left:0.85rem;
  border-radius: 10px;
  padding: 12px;
  width: 180px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 6px;
`;

const Name = styled.h4`
  margin: 8px 0 4px;
  font-size: 16px;
`;

const Price = styled.p`
  font-size: 14px;
  color: #555;
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


const ProductCard: React.FC<Props> = ({ item, onAddToCart }) => {
  return (
    <Card>
      <Image src={item.image} alt={item.name} />
      <Name>{item.name}</Name>
      <Price>Rs {item.price.toFixed(2)}</Price>
      <Button onClick={() => onAddToCart(item)}>Add to Cart</Button>
    </Card>
  );
};

export default ProductCard;

