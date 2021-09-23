import React from 'react';

import * as C from './styles';

type CardProps = {
  _id: number;
  name: string;
  scaleFirstItem: number;
};

const Card = ({ _id, scaleFirstItem, name }: CardProps) => {
  return (
    <C.CardProduct
      animate={{
        scaleY: _id === 1 ? scaleFirstItem : 1,
      }}
    >
      <h1>{name}</h1>
    </C.CardProduct>
  );
};

export default Card;
