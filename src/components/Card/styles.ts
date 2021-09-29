import styled, { css } from 'styled-components';
import {
  motion

} from "framer-motion";
import arrowDown from '../../assets/arrow-down.svg';


export const CardProduct = styled(motion.li) <{ v: number; arrowClick: boolean; }>`
  width: 22vw;
  height: 60vh;
  min-width: 22vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #7a27ee;
  padding: 20px 10px 10px 10px;
  border-radius: 30px;
  z-index: 2;
  position: absolute;
  .image0 {
    ${({ v }) => v === 0 && 'display: none;'};
   
    /* transition: ease-out 1s; */

  }

`;
// ================

export const CardHeader = styled(motion.p)`
  color: #f1f1f1;
    font-size: 22px;
    font-family: Roboto, sans-serif;
    margin-left: 20px;
`;

export const firstTitleVariant = {
  initial: {
    opacity: 1,
    y: 0,
    display: 'block',
  },
  visible: {
    opacity: 1,
    y: 20,
  },
  hidden: {
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
    opacity: 0,
    display: 'none',
  },
};


// ========================



export const ImageProduct = styled(motion.img)`
    width: 70%;
    height: 20%;
    position: absolute;
    top: 30%;
    left: 19%;
    transform: rotateZ(16deg);
    /* transition: ease-out 0.5s; */

`;


// =================================

export const ImageProductTwo = styled(motion.img)`
    width: 35%;
    height: 30%;
    position: absolute;
    /* top: 40%; */
    top: 120%;
    left: 25%;
    transform: rotateZ(70deg);
    z-index: 5;
    /* transition: ease-out 0.5s; */

`;


export const ImageProductTwoVariant = {
  initial: {
    opacity: 0,
    rotateZ: 70,
    top: '120%',
  },
  visible: {
    top: '40%',
    rotateZ: 16,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.9,
    },
  },
  hidden: {
    right: '100%',
    transition: {
      delay: 0.2,
      duration: 0.5,
    },
  },
};

export const secondImageProductTwoVariant = {
  initial: {
    top: '40%',
    rotateZ: 16,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.9,
    },
  },
  visible: {
    top: '40%',
    rotateZ: 16,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 0.9,
    },
  },
  // hidden: {
  //   right: '100%',
  //   transition: {
  //     delay: 0.2,
  //     duration: 0.5,
  //   },
  // },
};
// =======================
export const CardContent = styled(motion.article)`
    width: 100%;
    height: 60%;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-color: #5f1fbd;
  border-radius: 20px;
  padding: 0 10px 20px 15px;
  
`;

export const ContentVariant = {
  visible: {
    opacity: 1,
    display: 'flex',
  },

  hidden: {
    transition: {
      delay: 0.2,
      ease: 'easeInOut',
      duration: 0.5,
    },
    opacity: 0,
    display: 'none',
  },
};


// ==========================



export const TitleProduct = styled(motion.h1)`
  color: #FFFFFF;
    /* font-size: 18px; */
    font-family: Roboto, sans-serif;
    margin-bottom: 8px;
    font-size: 35px;
`;


export const DescriptionProduct = styled(motion.p)`
    color: #8953dc;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
`;


export const RestItensVariant = {
  initial: {
    opacity: 1,
    y: 0,
    display: 'block',
  },
  visible: {
    opacity: 1,
    y: -20,
  },

  hidden: {
    opacity: 0,
    display: 'none',
    transition: {
      delay: 0.2,
      duration: 0.5,
    },

  },
};

// ===========================

// =====================================

export const CardContentTwo = styled(motion.article)`
    width: 100%;
    height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10% 0 19%;
  justify-content: center;

 
`;

export const CardContentTwoVariant = {
  hidden: {
    opacity: 0,
    display: 'none',

  },

  visible: {

    opacity: 1,
    display: 'flex',
    transition: {
      delay: 0.2,
      ease: 'easeInOut',
      duration: 0.5,
    },

  },



};

// =========================================

export const CardHeaderTwo = styled(motion.p)`
color: #f1f1f1;
font-size: 18px;
font-family: Roboto, sans-serif;
`;

export const firstTitleVariantTwo = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: -30,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },



};

// =========================================

// =========================================

export const TitleProductTwo = styled(motion.h1)`
color: #FFFFFF;
font-size: 55px;
font-family: Roboto, sans-serif;
margin-bottom: 30px;
line-height: 0.9;
`;

export const DescriptionProductTwo = styled(motion.p)`
color: #FFFFFF;
font-size: 25px;
font-family: Roboto, sans-serif;
font-weight: bold;
margin-bottom: 10px;

`;


export const RestItensVariantTwo = {
  hidden: {
    opacity: 0,
    y: 0,

  },

  visible: {
    opacity: 1,
    y: -30,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },


};

// ===========================


//  ===========================
export const ContainerChoice = styled(motion.section)`
width: 80%;
display: flex;
align-items: center;

    .colors {
  margin-right: 50px;
}
`;

export const ContainerChoiceTwoVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },



};

//  =============================================

export const LabelChoice = styled.p`
color: #f1f1f1;
font-size: 18px;
font-family: Roboto, sans-serif;
margin-bottom: 5px;
opacity: 0.5;
`;

export const ContainerColorsButton = styled.div<{ checkC: number; idColor: number; }>`
width: 25px;
height: 25px;
border-radius: 50%;
background-color: ${({ checkC, idColor }) => checkC === idColor && ' #FFF'};
display: flex;
align-items: center;
justify-content: center;
margin-right: 1px;
`;

export const ColorsButton = styled.button<{ color: string; }>`
width: 22px;
height: 22px;
border-radius: 50%;
background-color: ${({ color }) => color};
`;

export const SelectSize = styled.select`
width: 45px;
height: 26px;
background-color: transparent;
border: 1px solid #FFF;
border-radius: 4px;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
padding-right: 15px;
background: ${() => `url(${arrowDown}) center right no-repeat;`};

background-size: 8px 8px;
background-position: 30px;
color: #FFF;
padding-left: 10px;

`;

export const ButtonAddCart = styled(motion.button)`
width: 130px;
height: 40px;
border-radius: 7px;
background-color: #FFF;
margin-top: 30px;
font-family: Roboto, sans-serif;
font-weight: bold;
color: #424270;

`;

export const buttonVariantTwo = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: {
    opacity: 1,
    y: -10,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },



};


