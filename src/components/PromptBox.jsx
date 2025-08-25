import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PromptContainer = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem 2rem;
  border-radius: 32px;
  gap: 1.5rem;
  width: min(800px, 90%);
  min-height: 60px; // Reduced height
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
`;

const StarIcon = styled.span`
  color: #ffb400;
  font-size: 1.5rem;
`;

const PromptText = styled.div`
  color: #4ECDC4;
  font-size: 1.1rem;
  flex: 1;
  min-width: 0;
  white-space: pre-wrap;
  line-height: 1.5;
  text-shadow: 0 0 10px rgba(78, 205, 196, 0.3);
`;

const GenerateButton = styled.button`
  background: linear-gradient(
    90deg,
    #FF6B6B,
    #4ECDC4,
    #45B7D1,
    #96E6A1,
    #FF6B6B
  );
  background-size: 300% 300%;
  animation: gradientMove 5s ease infinite;
  color: white;
  border: none;
  border-radius: 24px;
  padding: 0.8rem 2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);

  &:hover {
    transform: translateY(-2px);
    background-size: 400% 400%;
    animation: gradientMove 3s ease infinite;
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const prompts = [
  "Desert-themed Chanel perfume campaign.",
  "Minimalist tech startup landing page.",
  "Futuristic neon city landscape at night.",
  "Vintage botanical illustration style.",
];

const Letter = styled(motion.span)`
  display: inline-block;
  white-space: pre; // This will preserve spaces
`;

export const PromptBox = () => {
  const [currentPrompt, setCurrentPrompt] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const currentText = prompts[currentPrompt];

  useEffect(() => {
    setDisplayedText('');
    let charIndex = 0;
    let lastWasSpace = false;

    const typeInterval = setInterval(() => {
      if (charIndex < currentText.length) {
        const currentChar = currentText[charIndex];
        
        // Add extra delay after space to create pause between words
        if (lastWasSpace) {
          setTimeout(() => {
            setDisplayedText(prev => prev + currentChar);
          }, 200); // Extra 200ms delay after space
        } else {
          setDisplayedText(prev => prev + currentChar);
        }
        
        lastWasSpace = currentChar === ' ';
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentPrompt((prev) => (prev + 1) % prompts.length);
        }, 2000); // Wait 2 seconds before next prompt
      }
    }, 150); // Slower typing speed - 150ms per letter

    return () => clearInterval(typeInterval);
  }, [currentPrompt, currentText]);

  return (
    <PromptContainer>
      <StarIcon>★</StarIcon>
      <PromptText>
        <AnimatePresence mode="sync">
          {displayedText.split('').map((letter, index) => (
            <Letter
              key={`${currentPrompt}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              {letter}
            </Letter>
          ))}
        </AnimatePresence>
      </PromptText>
      <GenerateButton>Generate →</GenerateButton>
    </PromptContainer>
  );
};