import React, { useState } from 'react';
import styled from 'styled-components';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import { theme } from '../theme';
import { useNavigate } from 'react-router-dom';
import { toast } from '../hooks/use-toast.ts';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

const HeaderContainer = styled.header`
  backdrop-filter: blur(10px);    
  background-color: rgba(255, 255, 255, 0.8);
 // background-color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid #eaeaea;
`;


const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space.sm};
  cursor: pointer;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  display: none;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.space.sm} ${props => props.theme.space.xl};
  border-radius: 50px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  font-family: ${props => props.theme.fonts.body};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SearchIcon = styled.button`
  position: absolute;
  left: ${props => props.theme.space.sm};
  top: 50%;
  transform: translateY(-50%);
  color: ${props => props.theme.colors.gray};
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.space.md};
`;

const IconButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0.33rem;
  margin-left: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
  }
`;


const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      toast({
        title: "Search",
        description: `Searching for "${searchTerm}"...`,
      });
      
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };
  
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>
        <span>FreshPick</span>
      </Logo>
      
      <SearchContainer>
        <form onSubmit={handleSearch}>
          <SearchIcon type="submit">
            <Search size={18} />
          </SearchIcon>
          <SearchInput 
            placeholder="Search for products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </SearchContainer>
      
      <HeaderActions>
        {/* <IconButton onClick={() => navigate('/categories')}>
          <Menu size={24} />
        </IconButton> */}
        <IconButton onClick={() => navigate("/cart")}>
          <ShoppingCart size={24} />
          {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
        </IconButton>
      </HeaderActions>
    </HeaderContainer>
  );
};

export default Header;
