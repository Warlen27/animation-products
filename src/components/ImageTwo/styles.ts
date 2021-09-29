import styled, { css } from 'styled-components';
import {
    motion

} from "framer-motion"


export const Container = styled(motion.img)`
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