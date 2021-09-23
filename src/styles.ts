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

export const ContainerProducts = styled(motion.ul) <{ scaleSecondItem: number }>`
  width: 100vw;
  height: 100vh;
  /* overflow-x: scroll; */
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 35px;
  list-style: none;
  /* justify-content: space-between; */
  background-color: #f00;
  z-index: 2;
  position: absolute;
  transform: translate(0%, 0);
  top: 0;
  left: -25px;
  .id1 {
    transform: scale(1.0001) !important;
    margin-right: 30%;
    /* transition: ease-in-out 0.5s linear; */
  }

  .id2 div {
    width: ${({ scaleSecondItem }) => scaleSecondItem === 1.0001 ? '30vw' : '22vw'};
    height: ${({ scaleSecondItem }) => scaleSecondItem === 1.0001 ? '100vh' : '60vh'};
    transition: ease-in-out 0.5s;
  }
  > li:first-child {
    div:first-child {
    width: 30vw;
    height: 100vh;
  }
  } 
  
  /* li + li {
    transform: translate(160%, 0);
  } */

 
`;

export const CardLi = styled(motion.li) <{ _id: number }>`
    /* transition: ease-in-out 0.5s; */

   /* transform: ${({ _id }) => _id === 1 ? 'scale(1.66)' : 'scale(1)'}; */
`;









