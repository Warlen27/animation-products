import React, { useCallback, useState } from 'react';
import * as C from './styles';
import Marquee from './components/Marquee';
import Card from './components/Card';
import logo from './assets/logo.svg';
import cart from './assets/cart.svg';
import arrow from './assets/arrow.svg';
import shoe1 from './assets/shoe1.png';
import shoe2 from './assets/shoe2.png';
import shoe3 from './assets/shoe3.png';
import shoe4 from './assets/shoe4.png';
import shoe5 from './assets/shoe5.png';
import ImageTwo from './components/ImageTwo';

const PRODUCTS = [
  {
    id: 1,
    firstTitle: 'Vans',
    secondTitle: 'Old Skool Platform black White',
    color: [
      {
        id: 6,
        name: 'Navy',
        ex: '#000080',
      },
      {
        id: 7,
        name: 'Light pink',
        ex: '#FFB6C1',
      },
      {
        id: 8,
        name: 'Black',
        ex: '#000000',
      },
    ],
    price: 'IDR 1.299K',
    image: shoe1,
  },

  {
    id: 2,
    firstTitle: 'Nike',
    secondTitle: 'Nike Sb Zoom',
    color: [
      {
        id: 9,
        name: 'Navy',
        ex: '#000080',
      },
      {
        id: 10,
        name: 'Black',
        ex: '#000000',
      },
    ],
    price: 'IDR 750K',
    image: shoe2,
  },
  {
    id: 3,
    firstTitle: 'Vans',
    secondTitle: 'New York Old Skool Madder',
    color: [
      {
        id: 11,
        name: 'Navy',
        ex: '#000080',
      },
      {
        id: 12,
        name: 'Black',
        ex: '#000000',
      },
    ],
    price: 'IDR 1.499K',
    image: shoe3,
  },

  {
    id: 4,
    firstTitle: 'Nike',
    secondTitle: 'Nike Sb Khaki Check',
    color: [
      {
        id: 13,
        name: 'Black',
        ex: '#000000',
      },
    ],
    price: 'IDR 1.299K',
    image: shoe4,
  },

  {
    id: 5,
    firstTitle: 'Nike',
    secondTitle: 'Nike Zoom Fly Flyknit Shoe',
    color: [
      {
        id: 14,
        name: 'Navy',
        ex: '#000080',
      },
      {
        id: 15,
        name: 'Black',
        ex: '#000000',
      },
    ],
    price: 'IDR 1.299K',
    image: shoe5,
  },
];

type ColorsProp = {
  id: number;
  name: string;
  ex: string;
};
export type ContainerCardProps = {
  id: number;
  firstTitle: string;
  secondTitle: string;
  color: ColorsProp[];
  price: string;
  image: string;
};

function App() {
  const [products, setProducts] = useState<ContainerCardProps[]>(PRODUCTS);
  const [direction, setDirection] = useState(0);
  const [targetElement, setTargetElement] = useState('index0');

  const [arrowClick, setArrowClick] = useState(false);

  const [v, setV] = React.useState(0);

  const handleLeft = useCallback(() => {
    setDirection(-1);

    setArrowClick(true);
    setV(prev => prev + 1);
  }, []);

  const handleRight = useCallback(() => {
    setDirection(1);
    setArrowClick(true);

    setV(prev => prev - 1);
  }, []);

  React.useEffect(() => {
    console.log('p', products);
  }, [products]);

  React.useEffect(() => {
    const element = document.elementFromPoint(70, 0)?.id;
    console.log('element', element);

    if (element) setTargetElement(element);
    return () => setTargetElement('');
  }, [v]);

  React.useEffect(() => {
    console.log('arrowClick', arrowClick);
  }, [arrowClick]);

  return (
    <C.Container>
      <Marquee />
      <C.Aside />
      <C.Content>
        <C.Header>
          <C.ContainerLogo>
            <C.Logo src={logo} alt="logo" />
            <C.Code>Code</C.Code>
          </C.ContainerLogo>

          <C.Menu>
            <C.Item>Home</C.Item>
            <C.Item focus>Collections</C.Item>
            <C.Item>About</C.Item>
            <img src={cart} alt="cart" />
          </C.Menu>
        </C.Header>
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
        <C.Caroucel>
          <C.ContainerProducts>
            {products.map((product, index) => (
              <ImageTwo
                direction={direction}
                index={index}
                key={product.id}
                image={product.image}
                arrowClick={arrowClick}
                v={v}
                id={product.id}
              />
            ))}
            {products.map((product, index) => (
              <Card
                setArrowClick={setArrowClick}
                arrowClick={arrowClick}
                key={product.id}
                index={index}
                id={product.id}
                firstTitle={product.firstTitle}
                secondTitle={product.secondTitle}
                color={product.color}
                price={product.price}
                image={product.image}
                v={v}
                setV={setV}
                direction={direction}
                targetElement={targetElement}
                setTargetElement={setTargetElement}
                // setVariantsImageTwo={setVariantsImageTwo}
                // variantsImageTwo={variantsImageTwo}
              />
            ))}
          </C.ContainerProducts>
        </C.Caroucel>
      </C.Content>
    </C.Container>
  );
}

export default App;
