import styled from 'styled-components';
import {
  motion

} from "framer-motion";

export const CardProduct = styled(motion.div)`
  width: 22vw;
  height: 60vh;
  /* min-width: 310px; */
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-color: #7a27ee;
  padding: 20px 10px 10px 10px;
  border-radius: 30px;
  z-index: 2;

  h1{
    font-size: 50px;
    color: #fff;

  }
  /* position: absolute;
  top: 0; */
  
`;
