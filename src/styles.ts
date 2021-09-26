import styled from 'styled-components';
import {
  motion

} from "framer-motion"

type PropsLi = {
  focus?: boolean;
}

type PropsArrow = {
  left?: boolean;
}

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  position: relative;
  
`;

export const Aside = styled.aside`
  width: 4%;
  height: 100%;
  background-color: #894cf7;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    width: 5px;
    height: 80px;
    background-color: #FFFFFF;
    content: '';
  }
`;

export const Content = styled.article`
  width: 96%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgb(0,0,0,.1);
  z-index: 3;
  position: relative;

  
`;



export const Footer = styled.footer`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 0 40px 0 0;
  
  
`;

export const ContentFooter = styled.section`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: #553b8e;
    font-size: 18px;
    font-family: Roboto, sans-serif;
  }
`;

export const ContainerArrows = styled.section`
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Arrow = styled.button<PropsArrow>`
  width: 32px;
  height: 32px;
  z-index: 4;
  img {
  transform: ${({ left }) => left && 'rotate(180deg)'};

  }
`;

export const ContainerProducts = styled(motion.ul)`
  width: 100vw;
  min-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 35px;
  list-style: none;
  background-color: rgb(0,0,0,.5);
  z-index: 2;
  position: absolute;
  top: 0;
  left: -25px;
  /* transform: translateX(40%); */
  .index0 {
    transform: scale(1.0001) !important;
    margin: auto 0;
    left: 0;
    transition: ease-out 0.5s;
    width: 30vw;
    height: 100vh;
  }

  .index1 {
    right: 18%;
    margin: auto 0;

  }

  .index2 {
    right: -6%;
    margin: auto 0;

  }

  .index3 {
    right: -30%;
    margin: auto 0;

  }


 
`;









