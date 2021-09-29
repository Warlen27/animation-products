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
  oneImageTwoVariant,
  TwoImageTwoVariant,
} from '../Variants';

import * as C from './styles';

interface CardProps extends ContainerCardProps {
  index: number;
  arrowClick: boolean;
  setArrowClick(param: boolean): void;
  setV(param: number): void;
  v: number;
  direction: number;
  targetElement: string;
  setTargetElement(param: string): void;
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
  v,
  setV,
  direction,
  targetElement,
  setTargetElement,
}: CardProps) => {
  const [variants, setVariants] = useState({});
  const [variantsFirstImage, setVariantsFirstImage] = useState({});

  // const [targetElement, setTargetElement] = useState('');
  const [checkColor, setCheckColor] = useState(1);

  const checkIndex = useMemo(() => `index${v}` !== `index${index}`, [index, v]);

  const handleDirection = useCallback(() => {
    console.log('v', v);
    console.log('index', index);

    if (id === 1) {
      switch (v) {
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
      switch (v) {
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
      switch (v) {
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
      switch (v) {
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
      switch (v) {
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
  }, [id, index, v]);

  useEffect(() => {
    handleDirection();
  }, [handleDirection]);

  useEffect(() => {
    setArrowClick(false);
  }, [arrowClick, setArrowClick]);

  // useEffect(() => {
  //   setArrowClick(false);
  // }, []);

  if (v >= 5) {
    console.log('index-225', index);

    setV(0);
  }

  if (v < 0) {
    console.log('index-231', index);

    setV(4);
  }
  // `index${v}` !== `index${index}`

  return (
    <AnimatePresence initial={false} custom={direction}>
      <C.CardProduct
        custom={direction}
        id={`index${index}`}
        variants={variants}
        animate={arrowClick && ['initial', 'middle']}
        v={v}
        arrowClick={arrowClick}
      >
        <C.CardHeader
          variants={C.firstTitleVariant}
          animate={
            arrowClick ||
            (`index${v}` === `index${index}`
              ? ['visible', 'hidden']
              : ['initial'])
          }
        >
          {firstTitle}
        </C.CardHeader>

        {/* {v === 0 && index === 0 && <></>} */}

        <C.ImageProduct
          className={`image${index}`}
          src={image}
          variants={variantsFirstImage}
          animate={
            arrowClick &&
            (`index${v}` === `index${index}`
              ? ['visible', 'hidden']
              : ['visible'])
          }
        />

        {/* <C.ImageProduct
          src={image}
          variants={C.ImageVariant}
          animate={
            arrowClick &&
            (`index${v}` === `index${index}`
              ? ['visible', 'hidden']
              : ['visible'])
          }
        /> */}
        {/* )} */}

        <C.CardContent
          variants={C.ContentVariant}
          animate={
            arrowClick ||
            (`index${v}` === `index${index}`
              ? ['visible', 'hidden']
              : ['visible'])
          }
        >
          <C.TitleProduct
            variants={C.RestItensVariant}
            animate={
              arrowClick ||
              (`index${v}` === `index${index}`
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
              (`index${v}` === `index${index}`
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
            (`index${v}` === `index${index}`
              ? ['hidden', 'visible']
              : ['hidden'])
          }
        >
          <C.CardHeaderTwo
            variants={C.firstTitleVariantTwo}
            animate={
              arrowClick ||
              (`index${v}` === `index${index}`
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
              (`index${v}` === `index${index}`
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
              (`index${v}` === `index${index}`
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
              (`index${v}` === `index${index}`
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
              (`index${v}` === `index${index}`
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
