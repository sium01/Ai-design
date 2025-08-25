import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
`;

export const Logo = styled.div`
  img {
    height: 32px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const NavLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  opacity: 0.8;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export const GetStartedButton = styled(motion.button)`
  background: var(--accent-color);
  color: var(--text-color);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 8rem;
  position: relative;
`;

export const BetaBadge = styled.div`
  background: var(--accent-color);
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  backdrop-filter: blur(10px);
`;

export const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 2rem;
`;

export const HeroText = styled.div`
  margin-bottom: 3rem;
`;

export const GradientText = styled.h2`
  font-size: 4rem;
  line-height: 1.2;
  background: linear-gradient(to right, #ffffff 30%, rgba(255, 255, 255, 0.5));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const PromptContainer = styled.div`
  background: var(--accent-color);
  padding: 1rem 1.5rem;
  border-radius: 100px;
  display: flex;
  align-items: center;
  gap: 1rem;
  backdrop-filter: blur(10px);
  margin-bottom: 3rem;
`;

export const StarIcon = styled.span`
  font-size: 1.25rem;
`;

export const PromptText = styled.div`
  min-width: 300px;
`;

export const GenerateButton = styled(motion.button)`
  background: var(--text-color);
  color: var(--primary-bg);
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 100px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const AwardBadge = styled.div`
  background: var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  font-size: 0.875rem;
  backdrop-filter: blur(10px);
`;