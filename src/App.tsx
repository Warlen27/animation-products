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
  {
    id: 4,
    name: 'comp4',
  },
];
export type CardProps = {
  id: number;
  name: string;
};

function App() {
  const [products, setProducts] = useState<CardProps[]>(PRODUCTS);

  const [arrowClick, setArrowClick] = useState(false);

  // Decreases the value of each id.
  // before ['1', '2', '3', '4'], then ['4', '1', '2', '3']
  const putLeftProducts = useCallback(() => {
    const p = products.map(item => ({
      ...item,
      id: item.id - 1,
    }));
    const pIndex = p.findIndex(i => i.id === 0);
    p[pIndex].id = products.length;

    return p;
  }, [products]);

  // It does the other way by increasing the value of each id.
  // before ['4', '1', '2', '3'], then ['1', '2', '3', '4']. It's all about calling.
  const putRightProducts = useCallback(() => {
    const p = products.map(item => ({
      ...item,
      id: item.id + 1,
    }));
    const pIndex = p.findIndex(i => i.id === products.length + 1);
    p[pIndex].id = 1;

    return p;
  }, [products]);

  // Triggers the animation to the left.
  const handleLeft = useCallback(() => {
    setArrowClick(true);

    const p = putLeftProducts();

    setProducts(p);
  }, [putLeftProducts]);

  // Triggers the animation to the right, it remains to implement.
  const handleRight = useCallback(() => {
    console.log('handleRight');
  }, []);

  React.useEffect(() => {
    console.log('p', products);
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
        <C.ContainerProducts>
          {products.map((product, index) => (
            <Card
              setArrowClick={setArrowClick}
              arrowClick={arrowClick}
              key={product.id}
              index={index}
              id={product.id}
              name={product.name}
            />
          ))}
        </C.ContainerProducts>
      </C.Content>
    </C.Container>
  );
}

export default App;
