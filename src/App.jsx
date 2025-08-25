import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { device } from './styles/breakpoints';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { AnimatedBackground } from './components/AnimatedBackground';
import { PromptBox } from './components/PromptBox';
import { MobileMenu } from './components/MobileMenu';
import './App.css';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  display: flex;
  flex-direction: column;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2px;

  .logo-text {
    font-size: 24px;
    font-weight: bold;
    color: white;
  }

  .beta-badge {
    position: absolute;
    top: -8px;
    right: -28px;
    background: #ffb400;
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 8px;
    font-weight: bold;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 0 4rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const GetStartedButton = styled.button`
  background: linear-gradient(
    90deg,
    #ff6b6b,
    #4ecdc4,
    #45b7d1,
    #96e6a1,
    #ff6b6b
  );
  background-size: 300% 300%;
  animation: gradientMove 5s ease infinite;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0.8rem 2rem;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1rem;
  text-align: center;

  @media ${device.desktop} {
    margin-top: 6rem;
    padding: 0;
  }
`;

const HeroTitle = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  font-size: 2rem; // Reduced size
  margin-bottom: 1rem;

  .beta-badge {
    position: absolute;
    top: -8px;
    right: -28px;
    background: #ffb400;
    color: white;
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 8px;
    font-weight: bold;
  }
`;

const BetaBadge = styled.span`
  background: #ffb400;
  color: #fff;
  border-radius: 12px;
  padding: 0.25rem 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  font-size: 2rem;

  @media ${device.desktop} {
    font-size: 3rem;
  }
`;

const HeroText = styled.div`
  text-align: center;
  margin: 2rem 0;

  h1 {
    font-size: 3.5rem; // Reduced size
    background: linear-gradient(
      45deg,
      #ff6b6b,
      #4ecdc4,
      #45b7d1,
      #96e6a1
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 300% 300%;
    animation: gradientMove 5s ease infinite;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  @keyframes gradientMove {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const GradientText = styled.span`
  font-size: 1.5rem;

  @media ${device.desktop} {
    font-size: 2rem;
  }
`;

const PromptContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;

  @media ${device.desktop} {
    width: auto;
  }
`;

const AwardBadge = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 16px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2rem;
  display: flex;
  gap: 0.5rem;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #4ecdc4;
    text-shadow: 0 0 8px rgba(78, 205, 196, 0.5);
  }
`;

const App = () => {
  return (
    <Wrapper>
      <Nav>
        <Logo>
          <span className="logo-text">Dora AI</span>
          <span className="beta-badge">BETA</span>
        </Logo>

        <NavLinks>
          <NavLink href="#overview">Overview</NavLink>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#about">About Dora</NavLink>
          <NavLink href="#roadmap">Roadmap</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </NavLinks>

        <GetStartedButton>Get Started →</GetStartedButton>
      </Nav>

      <Canvas className="canvas-background">
        <AnimatedBackground />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <Content>
        <Hero>
          <HeroTitle>
           
          </HeroTitle>
          <BetaBadge>Beta</BetaBadge>
          <Title>Dora AI</Title>
          <HeroText>
            <h1>Transform Your Ideas</h1>
            <h1 className="right-align">Into Reality</h1>
            <h1>With Artificial Intelligence</h1>
          </HeroText>

          <PromptContainer>
            <PromptBox />
          </PromptContainer>
 <AwardBadge>
            <span>Golden Kitty Awards</span>
            <span>2023</span>
          </AwardBadge>
         
        </Hero>
      </Content>
    </Wrapper>
    
  );
};

export default App;