import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate(); 

  const handleAboutUsClick = () => {
    navigate("/AboutUs"); 
  };

  const handleContactClick = () => {
    navigate("/ContactPage"); 
  };

  return (
    <FooterContainer>
      <FooterButton onClick={handleAboutUsClick}>About Us</FooterButton>
      <FooterButton onClick={handleContactClick}>Contact</FooterButton>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  background-color: #333;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
`;

const FooterButton = styled.button`
  margin: 0 10px;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid white;
  color: white;
  cursor: pointer;
`;

export default Footer;
