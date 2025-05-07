import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #4CAF50, #2E7D32);
  color: #fff;
  padding: 3rem 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const LinksGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const LinkSection = styled.div`
  min-width: 150px;

  h4 {
    margin-bottom: 0.6rem;
    font-size: 1rem;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 6px 0;
      font-size: 0.85rem;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
        color: #ffc107;
      }
    }
  }
`;


const Copyright = styled.div`
  font-size: 0.75rem;
  opacity: 0.85;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
    
      <LinksGrid>
        <LinkSection>
          <h4>Categories</h4>
          <ul>
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Grains</li>
            <li>Dairy</li>
          </ul>
        </LinkSection>

        <LinkSection>
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </LinkSection>

        <LinkSection>
          <h4>Help</h4>
          <ul>
            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </LinkSection>
      </LinksGrid>

      
      <Copyright>
        &copy; {new Date().getFullYear()} FreshPick. All rights reserved.
        <p style={{ textAlign:'center'}}>By Divya Sawant</p>
      </Copyright>
    </FooterWrapper>
  );
};

export default Footer;
