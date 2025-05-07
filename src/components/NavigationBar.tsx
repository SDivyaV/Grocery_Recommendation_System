import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Home, Grid2X2, Info, Contact } from 'lucide-react';

const NavContainer = styled.nav`
  background-color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space.sm} ${props => props.theme.space.md};
  box-shadow: ${props => props.theme.shadows.small};
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: ${props => props.theme.space.lg};
  list-style-type: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    gap: ${props => props.theme.space.md};
    overflow-x: auto;
    width: 100%;
    padding-bottom: ${props => props.theme.space.xs};
    
    /* Hide scrollbar */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => props.theme.space.xs};
  text-decoration: none;
  color: ${props => props.theme.colors.dark};
  font-weight: 600;
  padding: ${props => props.theme.space.xs} ${props => props.theme.space.sm};
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
  
  &.active {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.small};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkText = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
  white-space: nowrap;
`;

const NavigationBar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">
            <IconWrapper>
              <Home size={20} />
            </IconWrapper>
            <LinkText>Home</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/category/Vegetables">
            <IconWrapper>
              <Grid2X2 size={20} />
            </IconWrapper>
            <LinkText>Categories</LinkText>
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink to="/favorites">
            <IconWrapper>
              <Heart size={20} />
            </IconWrapper>
            <LinkText>Favorites</LinkText>
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink to="/about">
            <IconWrapper>
              <Info size={20} />
            </IconWrapper>
            <LinkText>About</LinkText>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/contact">
            <IconWrapper>
              <Contact size={20} />
            </IconWrapper>
            <LinkText>Contact</LinkText>
          </NavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavigationBar;