import styled from 'styled-components';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroContainer = styled.section`
  position: relative;
  height: 400px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  margin-bottom: ${props => props.theme.space.lg};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    height: 300px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}80, ${props => props.theme.colors.dark}80);
  z-index: 1;
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: ${props => props.theme.space.xl};
  position: relative;
  z-index: 2;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.space.md};
  }
`;

const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: 600;
  margin-bottom: ${props => props.theme.space.md};
  font-family: ${props => props.theme.fonts.heading};
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.large};
  }
`;

const HeroTagline = styled.p`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-bottom: ${props => props.theme.space.lg};
  opacity: 0.9;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.regular};
  }
`;

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${props => props.theme.space.sm};
  padding: ${props => props.theme.space.sm} ${props => props.theme.space.lg};
  background-color: ${props => props.theme.colors.primary};
  color: white;
  text-decoration: none;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>Your Personal Grocery Guide</HeroTitle>
        <HeroTagline>Smart picks for your healthy lifestyle—delivered fresh to your door.</HeroTagline>
        <HeroButton to="/category/Vegetables">
          Explore Now
          <ArrowRight size={18} />
        </HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;