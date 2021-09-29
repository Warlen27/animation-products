import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ContainerCardProps } from '../../App';
import {
  firstItem,
  secondItem,
  thirdItem,
  fourthItem,
  fifthItem,
  firstImageItamVariant,
  secondImageItemVariant,
} from '../Variants';

import * as C from './styles';

interface CardProps extends ContainerCardProps {
  index: number;
  arrowClick: boolean;
  setArrowClick(param: boolean): void;
  setClickCounter(param: number): void;
  clickCounter: number;
  direction: number;
}

const Card = ({
  id,
  secondTitle,
  price,
  firstTitle,
  color,
  image,
  index,
  arrowClick,
  setArrowClick,
  clickCounter,
  setClickCounter,
  direction,
}: CardProps) => {
  const [variants, setVariants] = useState({});
  const [variantsFirstImage, setVariantsFirstImage] = useState({});

  const [checkColor, setCheckColor] = useState(1);

  const handleDirection = useCallback(() => {
    if (id === 1) {
      switch (clickCounter) {
        case 0:
          setVariants(firstItem);
          setVariantsFirstImage(firstImageItamVariant);
          break;

        case 1:
          setVariants(fifthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 2:
          setVariants(fourthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 3:
          setVariants(thirdItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 4:
          setVariants(secondItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        default:
          break;
      }
    }

    if (id === 2) {
      switch (clickCounter) {
        case 0:
          setVariants(secondItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 1:
          setVariants(firstItem);
          setVariantsFirstImage(firstImageItamVariant);

          break;

        case 2:
          setVariants(fifthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 3:
          setVariants(fourthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 4:
          setVariants(thirdItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        default:
          break;
      }
    }

    if (id === 3) {
      switch (clickCounter) {
        case 0:
          setVariants(thirdItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 1:
          setVariants(secondItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 2:
          setVariants(firstItem);
          setVariantsFirstImage(firstImageItamVariant);

          break;

        case 3:
          setVariants(fifthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 4:
          setVariants(fourthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        default:
          break;
      }
    }

    if (id === 4) {
      switch (clickCounter) {
        case 0:
          setVariants(fourthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 1:
          setVariants(thirdItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 2:
          setVariants(secondItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 3:
          setVariants(firstItem);
          setVariantsFirstImage(firstImageItamVariant);

          break;

        case 4:
          setVariants(fifthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        default:
          break;
      }
    }

    if (id === 5) {
      switch (clickCounter) {
        case 0:
          setVariants(fifthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 1:
          setVariants(fourthItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 2:
          setVariants(thirdItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 3:
          setVariants(secondItem);
          setVariantsFirstImage(secondImageItemVariant);

          break;

        case 4:
          setVariants(firstItem);
          setVariantsFirstImage(firstImageItamVariant);

          break;

        default:
          break;
      }
    }
  }, [id, index, clickCounter]);

  useEffect(() => {
    handleDirection();
  }, [handleDirection]);

  useEffect(() => {
    setArrowClick(false);
  }, [arrowClick, setArrowClick]);

  if (clickCounter >= 5) {
    setClickCounter(0);
  }

  if (clickCounter < 0) {
    setClickCounter(4);
  }

  return (
    <AnimatePresence initial={false} custom={direction}>
      <C.CardProduct
        custom={direction}
        id={`index${index}`}
        variants={variants}
        animate={arrowClick && ['initial', 'middle']}
        v={clickCounter}
        arrowClick={arrowClick}
      >
        <C.CardHeader
          variants={C.firstTitleVariant}
          animate={
            arrowClick ||
            (`index${clickCounter}` === `index${index}`
              ? ['visible', 'hidden']
              : ['initial'])
          }
        >
          {firstTitle}
        </C.CardHeader>

        <C.ImageProduct
          className={`image${index}`}
          src={image}
          variants={variantsFirstImage}
          animate={
            arrowClick &&
            (`index${clickCounter}` === `index${index}`
              ? ['visible', 'hidden']
              : ['visible'])
          }
        />

        <C.CardContent
          variants={C.ContentVariant}
          animate={
            arrowClick ||
            (`index${clickCounter}` === `index${index}`
              ? ['visible', 'hidden']
              : ['visible'])
          }
        >
          <C.TitleProduct
            variants={C.RestItensVariant}
            animate={
              arrowClick ||
              (`index${clickCounter}` === `index${index}`
                ? ['visible', 'hidden']
                : ['initial'])
            }
          >
            {secondTitle}
          </C.TitleProduct>

          <C.DescriptionProduct
            variants={C.RestItensVariant}
            animate={
              arrowClick ||
              (`index${clickCounter}` === `index${index}`
                ? ['visible', 'hidden']
                : ['initial'])
            }
          >
            {color.map(c => c.name)[0]} {price}
          </C.DescriptionProduct>
        </C.CardContent>
        <C.CardContentTwo
          variants={C.CardContentTwoVariant}
          animate={
            arrowClick ||
            (`index${clickCounter}` === `index${index}`
              ? ['hidden', 'visible']
              : ['hidden'])
          }
        >
          <C.CardHeaderTwo
            variants={C.firstTitleVariantTwo}
            animate={
              arrowClick ||
              (`index${clickCounter}` === `index${index}`
                ? ['hidden', 'visible']
                : ['hidden'])
            }
          >
            {firstTitle}
          </C.CardHeaderTwo>

          <C.TitleProductTwo
            variants={C.RestItensVariantTwo}
            animate={
              arrowClick ||
              (`index${clickCounter}` === `index${index}`
                ? ['hidden', 'visible']
                : ['hidden'])
            }
          >
            {secondTitle}
          </C.TitleProductTwo>

          <C.DescriptionProductTwo
            variants={C.RestItensVariantTwo}
            animate={
              arrowClick ||
              (`index${clickCounter}` === `index${index}`
                ? ['hidden', 'visible']
                : ['hidden'])
            }
          >
            {price}
          </C.DescriptionProductTwo>

          <C.ContainerChoice
            variants={C.ContainerChoiceTwoVariant}
            animate={
              arrowClick ||
              (`index${clickCounter}` === `index${index}`
                ? ['hidden', 'visible']
                : ['hidden'])
            }
          >
            <div className="colors">
              <C.LabelChoice>Colors</C.LabelChoice>
              <div style={{ display: 'flex' }}>
                {color.map(c => (
                  <C.ContainerColorsButton
                    checkC={checkColor}
                    key={c.id}
                    idColor={c.id}
                  >
                    <C.ColorsButton
                      onClick={() => setCheckColor(c.id)}
                      color={c.ex}
                    />
                  </C.ContainerColorsButton>
                ))}
              </div>
            </div>
            <div>
              <C.LabelChoice>Size</C.LabelChoice>
              <C.SelectSize>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </C.SelectSize>
            </div>
          </C.ContainerChoice>

          <C.ButtonAddCart
            variants={C.buttonVariantTwo}
            animate={
              arrowClick ||
              (`index${clickCounter}` === `index${index}`
                ? ['hidden', 'visible']
                : ['hidden'])
            }
          >
            Add to Cart
          </C.ButtonAddCart>
        </C.CardContentTwo>
      </C.CardProduct>
    </AnimatePresence>
  );
};

export default Card;
