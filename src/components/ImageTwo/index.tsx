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
  clickCounter: number;
  direction: number;
  image: string;
  id: number;
};

const ImageTwo: React.FC<ContainerCardProps> = ({
  direction,
  index,
  image,
  arrowClick,
  clickCounter,
  id,
}) => {
  const [variantsImageTwo, setVariantsImageTwo] = useState({});

  const handleDirection = useCallback(() => {
    if (id === 1) {
      console.log('index-225', index);

      switch (clickCounter) {
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
      switch (clickCounter) {
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
      switch (clickCounter) {
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
      switch (clickCounter) {
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
      switch (clickCounter) {
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
  }, [id, index, clickCounter, variantsImageTwo]);

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
