import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Container } from './styles';
import {
  oneImageTwoVariant,
  TwoImageTwoVariant,
  fiveImageTwoVariant,
} from '../Variants';

type ContainerCardProps = {
  index: number;
  arrowClick: boolean;
  // setArrowClick(param: boolean): void;
  // setV(param: number): void;
  v: number;
  direction: number;
  image: string;
  id: number;
  // targetElement: string;
  // setTargetElement(param: string): void;
  // setVariantsImageTwo(param: object): void;
  // variantsImageTwo: object;
};

const ImageTwo: React.FC<ContainerCardProps> = ({
  direction,
  index,
  image,
  arrowClick,
  v,
  id,
}) => {
  const [variantsImageTwo, setVariantsImageTwo] = useState({});

  const handleDirection = useCallback(() => {
    console.log('vI', v);
    console.log('indexI', index);
    console.log('variantsImageTwoI', variantsImageTwo);

    if (id === 1) {
      console.log('index-225', index);

      switch (v) {
        case 0:
          setVariantsImageTwo(oneImageTwoVariant);
          break;

        case 1:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 2:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 3:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 4:
          setVariantsImageTwo(TwoImageTwoVariant);

          break;

        default:
          break;
      }
    }

    if (id === 2) {
      switch (v) {
        case 0:
          setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 1:
          setVariantsImageTwo(oneImageTwoVariant);

          break;

        case 2:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 3:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 4:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        default:
          break;
      }
    }

    if (id === 3) {
      switch (v) {
        case 0:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 1:
          setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 2:
          setVariantsImageTwo(oneImageTwoVariant);

          break;

        case 3:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 4:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        default:
          break;
      }
    }

    if (id === 4) {
      switch (v) {
        case 0:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 1:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 2:
          setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 3:
          setVariantsImageTwo(oneImageTwoVariant);

          break;

        case 4:
          //   setVariantsImageTwo(fiveImageTwoVariant);

          break;

        default:
          break;
      }
    }

    if (id === 5) {
      switch (v) {
        case 0:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 1:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 2:
          //   setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 3:
          setVariantsImageTwo(TwoImageTwoVariant);

          break;

        case 4:
          setVariantsImageTwo(oneImageTwoVariant);

          break;

        default:
          break;
      }
    }
  }, [id, index, v, variantsImageTwo]);

  useEffect(() => {
    handleDirection();
  }, [handleDirection]);

  return (
    <AnimatePresence initial={false} custom={direction}>
      <Container
        custom={direction}
        variants={variantsImageTwo}
        className={`image-two${index}`}
        src={image}
        animate={arrowClick && ['initial', 'hidden', 'middle', 'final']}
        transition={{ ease: 'easeOut', duration: 0.3 }}
      />
    </AnimatePresence>
  );
};

export default ImageTwo;
