import React, { useCallback, memo } from 'react';

import * as C from './styles';

type CardPropsLi = {
  name: string;
  index: number;
  arrowClick: boolean;
  setArrowClick(param: boolean): void;
  id: number;
};

const Card = ({ name, index, arrowClick, setArrowClick, id }: CardPropsLi) => {
  const [variants, setVariants] = React.useState({});

  const handleDirection = useCallback(() => {
    if (id === 4) {
      setVariants({
        initial: {
          left: ['-30%', '-30%'],

          opacity: [1, 0],
          height: ['94vh', '60vh'],
        },

        middle: {
          left: '108%',

          transition: {
            delay: 2,
            duration: 0.01,
          },
        },
        final: {
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.01,
          },
        },
      });
    }

    if (id === 1) {
      setVariants({
        initial: {
          right: ['18%', '70%'],

          height: ['60vh', '100vh'],
          width: ['22vw', '30vw'],
          transition: {
            duration: 0.8,
          },
        },
        middle: {},
        final: {},
      });
    }

    if (id === 2) {
      setVariants({
        initial: {
          right: ['-6%', '18%'],
          transition: {
            duration: 0.8,
          },
        },
        middle: {},
        final: {},
      });
    }

    if (id === 3) {
      setVariants({
        initial: {
          right: ['-30%', '-6%'],
          transition: {
            duration: 0.8,
          },
        },
        middle: {},
        final: {},
      });
    }
  }, [id]);

  React.useEffect(() => {
    handleDirection();
  }, [handleDirection]);

  React.useEffect(() => {
    setArrowClick(false);
  }, [arrowClick, setArrowClick]);

  return (
    <C.CardProduct
      className={`index${index}`}
      variants={variants}
      animate={arrowClick && ['initial', 'middle']}
    >
      <h1>{name}</h1>
    </C.CardProduct>
  );
};

export default memo(Card);
