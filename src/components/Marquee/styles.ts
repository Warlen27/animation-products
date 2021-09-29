import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }

`;

export const Container = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: #371771;

  h1 {
    text-transform: uppercase;
    font-size: 50rem;
    color: #3f2277;
    font-weight: bold;
    white-space: nowrap;
    will-change: transform;
    animation: ${marquee} 20s linear infinite;
    font-family:  Roboto, sans-serif;
  }
`;
