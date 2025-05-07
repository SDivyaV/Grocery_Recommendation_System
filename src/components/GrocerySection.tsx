import React,{useState} from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

type GroceryItem = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
};

const groceries: GroceryItem[] = [
    {
      id: 1,
      name: "Fresh Apples",
      price: 80,
      image: "https://images.pexels.com/photos/1510392/pexels-photo-1510392.jpeg",
      category: "Fruits",
    },
    {
      id: 2,
      name: "Organic Milk",
      price: 30,
      image: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
      category: "Dairy",
    },
    {
      id: 3,
      name: "Broccoli",
      price: 90,
      image: "https://images.pexels.com/photos/3722583/pexels-photo-3722583.jpeg",
      category: "Vegetables",
    },
    {
      id: 4,
      name: "Vegan Cheese",
      price: 100,
      image: "https://images.pexels.com/photos/773253/pexels-photo-773253.jpeg",
      category: "Dairy",
    },
    {
      id: 5,
      name: "Sourdough Bread",
      price: 95,
      image: "https://images.pexels.com/photos/11214709/pexels-photo-11214709.jpeg",
      category: "Dairy",
    },
    {
      id: 6,
      name: "Bell Pepper",
      price: 40,
      image: "https://images.pexels.com/photos/2893635/pexels-photo-2893635.jpeg",
      category: "Vegetables",
    },
    {
      id: 7,
      name: "Bananas",
      price: 70,
      image: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg",
      category: "Fruits",
    },
    {
      id: 8,
      name: "Spinach",
      price: 30,
      image: "https://images.pexels.com/photos/6824475/pexels-photo-6824475.jpeg",
      category: "Vegetables",
    },
    {
      id: 9,
      name: "Unsalted butter",
      price: 100,
      image: "https://images.pexels.com/photos/12162627/pexels-photo-12162627.jpeg",
      category: "Dairy",
    },
    {
      id: 10,
      name: "Basmati Rice",
      price: 120,
      image: "https://images.pexels.com/photos/4110251/pexels-photo-4110251.jpeg",
      category: "Grains",
    },
    {
      id: 11,
      name: "Mangoes",
      price: 500,
      image: "https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g",
      category: "Fruits",
    },
    {
      id: 12,
      name: "Wheat",
      price: 130,
      image: "https://images.pexels.com/photos/41959/food-grains-bread-wheat-cereals-41959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Grains",
    },
    {
        id: 13,
        name: "Potato",
        price: 40,
        image: "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category: "Vegetables",
    },
    {
        id: 14,
        name: "Tomatoes",
        price: 30,
        image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Vegetables",
    },
    {
        id: 15,
        name: "Brown rice",
        price: 120,
        image: "https://images.pexels.com/photos/4110257/pexels-photo-4110257.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category:"Grains"
    },
    {
        id: 16,
        name: "Cucumbers",
        price: 30,
        image: "https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        category:"Vegetables"
    },
    {
        id: 17,
        name: "Watermelon",
        price: 40,
        image: "https://images.pexels.com/photos/2894205/pexels-photo-2894205.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Fruits"
    },
    {
        id: 18,
        name: "Muskmelon",
        price: 50,
        image: "https://images.pexels.com/photos/31539397/pexels-photo-31539397/free-photo-of-fresh-organic-melons-with-stripes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=20",
        category: "Fruits"
    },
    {
        id: 19,
        name: "Oats",
        price: 80,
        image: "https://images.pexels.com/photos/4725726/pexels-photo-4725726.jpeg?auto=compress&cs=tinysrgb&w=600",
        category: "Grains"
    }
  ];


const SectionContainer = styled.section`
  background: linear-gradient(to right, #e8f5e9, #f1f8e9);
  padding: 60px 30px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 40px;
  color: #f39c12 ;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 20px;
`;

const Name = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 10px;
  color: #1c2833;
`;

const Price = styled.p`
  color: #3815c2;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const CartButton = styled.button`
  background-color: #f85e05;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;

  &:hover {
    background-color: #df5c15;
  }
`;

const CategoryTitle = styled.h3`
  text-align: left;
  font-size: 1.5rem;
  margin: 40px 0 20px;
  color: #2e7d32;
  border-left: 6px solid #66bb6a;
  padding-left: 12px;
`;

const categories = ["Vegetables", "Fruits", "Grains", "Dairy"];

const GrocerySection: React.FC = () => {
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
    <SectionContainer>
      <Title>Straight from the Farm to Your Cart</Title>
      {categories.map((category) => (
        <div key={category}>
          <CategoryTitle>{category}</CategoryTitle>
          <Grid>
            {groceries
            .filter(item => item.category === category)
            .map((item) => (
              <Card key={item.id}>
                <Image src={item.image} alt={item.name} />
                <Info>
                  <Name>{item.name}</Name>
                  <Price>Rs {item.price.toFixed(2)}</Price>
                  <CartButton onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </CartButton>
                </Info>
              </Card>
            ))}
          </Grid>
        </div>
      ))}
    </SectionContainer>
  );
};

export default GrocerySection;
