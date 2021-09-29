import styled, { css } from 'styled-components';
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

export const Header = styled.header`
  width: 96%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 40px 0 50px;
`;

export const ContainerLogo = styled.article`
  width: 110px;
  height: fit-content;
  display: flex;
  align-items: center;
  z-index: 3;
  
`;

export const Logo = styled.img`
  
`;

export const Code = styled.span`
  color: #f1f1f1;
  text-transform: uppercase;
  margin-left: 10px;
  font-size: 2rem;
  font-family: Roboto, sans-serif;
  font-weight: bold;
`;

export const Menu = styled.ul`
  width: 400px;
  display: flex;
  justify-content: space-between;
  list-style: none;

  img {
    margin-left: 40px;
    cursor: pointer;
  }
  
`;

export const Item = styled.li<PropsLi>`
    color: ${({ focus }) => focus ? '#f1f1f1' : '#553b8e'};
    font-size: 22px;
    font-family: Roboto, sans-serif;
    cursor: pointer;
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

export const Caroucel = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  position: absolute;

  top: 0;
  left:0;
`;



export const ContainerProducts = styled.ul`
  width: 113vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 35px;
  list-style: none;
  z-index: 2;
  background-color: rgb(0,0,0,.3);

  /* transform: translateY(-310px) translateX(40%); */
  /* margin-left: -25px; */
  #index0 {
    transform: scale(1.0001) !important;
    margin: auto 0;
    right: 72%;
    width: 30vw;
    height: 100vh;
  }

  #index1 {
    right: 18%;
    margin: auto 0;
    transition: ease-out 0.3s;

/* visibility: hidden; */
  }

  #index2 {
    right: -6%;
    margin: auto 0;
    transition: ease-out 0.3s;
/* 
    visibility: hidden; */


  }

  #index3 {
    right: -30%;
    margin: auto 0;
    transition: ease-out 0.3s;

    /* visibility: hidden; */

  }

  #index4 {
    right: -54%;
    margin: auto 0;
    transition: ease-out 0.3s;

    /* visibility: hidden; */

  }

  .image-two0 {
    top: 40%;
    left: 25%;
    transform: rotateZ(16deg);
    transition: ease-out 0.3s;

  }

  .image-two1 {
    /* visibility: hidden; */
   
  }

  .image-two2 {
    /* visibility: hidden; */
   
  }

  .image-two3 {
    /* visibility: hidden; */
   
  }

  .image-two4 {
    /* visibility: hidden; */
   
  }
`;









