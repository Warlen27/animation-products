import React, { useCallback, useState } from 'react';
import * as C from './styles';
import Card from './components/Card';

import arrow from './assets/arrow.svg';

const PRODUCTS = [
  {
    id: 1,
    name: 'comp1',
  },

  {
    id: 2,
    name: 'comp2',
  },
  {
    id: 3,
    name: 'comp3',
  },
];
type CardProps = {
  id: number;
  name: string;
};

function App() {
  const [products, setProducts] = useState<CardProps[]>(PRODUCTS);

  const [scaleFirstItem, setscaleFirstItem] = useState(1);
  const [itemDr1, setItemDr1] = useState(30);
  const [itemDl1, setItemDl1] = useState(0);

  const [itemD2, setItemD2] = useState(0);
  const [itemD3, setItemD3] = useState(0);

  const [scaleSecondItem, setscaleSecondItem] = useState(1);

  const putLeftProducts = useCallback(() => {
    const copyProducts = [...products];
    const item1 = copyProducts.filter(i => i.id === 1)[0];

    const p = copyProducts.map(item => ({
      ...item,
      id: item.id - 1,
    }));
    item1.id = 3;
    p.push(item1);
    p.shift();

    return p;
  }, [products]);

  const putRightProducts = useCallback(() => {
    const copyProducts = [...products];
    const item4 = copyProducts.filter(i => i.id === 3)[0];
    const p = copyProducts.map(item => ({
      ...item,
      id: item.id + 1,
    }));
    item4.id = 1;
    p.pop();

    p.unshift(item4);

    return p;
  }, [products]);

  const handleLeft = useCallback(() => {
    setItemDr1(0);
    setItemDl1(-32);

    setscaleSecondItem(1.0001);

    const p = putLeftProducts();

    setProducts(p);
  }, [putLeftProducts]);

  const handleRight = useCallback(() => {
    setItemDr1(32);
    setItemDl1(0);
    setscaleSecondItem(1);

    const p = putRightProducts();

    setProducts(p);
  }, [putRightProducts]);

  const handleD = useCallback(
    (id, aside) => {
      if (id === 1 && aside === 'right') {
        return `${itemDr1}%`;
      }

      if (id === 1 && aside === 'left') {
        return `${itemDl1}%`;
      }
    },
    [itemDl1, itemDr1],
  );

  React.useEffect(() => {
    console.log('products', products);
  }, [products]);

  return (
    <C.Container>
      <C.Aside />
      <C.Content>
        <C.Footer>
          <C.ContentFooter>
            <C.ContainerArrows>
              <C.Arrow left onClick={handleLeft}>
                <img src={arrow} alt="arrow" />
              </C.Arrow>
              <C.Arrow onClick={handleRight}>
                <img src={arrow} alt="arrow" />
              </C.Arrow>
            </C.ContainerArrows>
            <p>All Collection</p>
          </C.ContentFooter>
        </C.Footer>
        <C.ContainerProducts scaleSecondItem={scaleSecondItem}>
          {products.map(product => (
            <C.CardLi
              className={`id${product.id}`}
              _id={product.id}
              key={product.id}
              animate={{
                scale: product.id === 2 ? scaleSecondItem : 1,
                marginRight: handleD(product.id, 'right'),
                marginLeft: handleD(product.id, 'left'),
              }}
              transition={{ ease: 'easeOut', duration: 0.5 }}
            >
              <Card
                _id={product.id}
                scaleFirstItem={scaleFirstItem}
                name={product.name}
              />
            </C.CardLi>
          ))}
        </C.ContainerProducts>
      </C.Content>
    </C.Container>
  );
}

export default App;
