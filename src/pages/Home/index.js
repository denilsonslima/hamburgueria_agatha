import Card from "../../components/Card";
import Header from "../../components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import { CardContainer, CardsStyle, Container, Main } from "./styles";
import Car from "../../components/Car";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState([]);
  const [product, setProducts] = useState(false);
  const [click, setClick] = useState(false);
  const [text, setText] = useState("");
  const [shoppingCart, setshoppingCart] = useState([]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/products`
      );
      setProducts(products.data);
    };
    fetchProducts();
  }, []);

  const handleCardClick = (cardId) => {
    setSelectedProduct([cardId]);
  };

  const findProducts = (text) => {
    if (text.length === 0) {
      return product;
    }

    const burger = product.burger.filter((prod) =>
      prod.name.toLowerCase().includes(text.toLowerCase())
    );

    const beverage = product.beverage.filter((prod) =>
      prod.name.toLowerCase().includes(text.toLowerCase())
    );

    return {
      burger,
      beverage,
    };
  };

  const addProducts = (product) => {
    if (!shoppingCart.find((prod) => prod.id === product.id)) {
      const newProduct = { ...product, quantity: 1 };
      setshoppingCart([...shoppingCart, newProduct]);
      setQuantity(quantity + 1);
    }
  };

  const removeProducts = (product) => {
    const carItem = shoppingCart.filter((item) => item !== product);
    setshoppingCart(carItem);
    setQuantity(quantity - 1);
  };

  return (
    <Main>
      <Container>
        <Header
          click={click}
          setClick={setClick}
          setText={setText}
          quantity={quantity}
        />
        <CardContainer>
          <CardsStyle>
            {product &&
              findProducts(text).burger.map((card) => {
                return (
                  <Card
                    key={card.id}
                    card={card}
                    title={"Sanduíches"}
                    handleCardClick={handleCardClick}
                    selected={selectedProduct.includes(card.id)}
                    addProducts={addProducts}
                  />
                );
              })}
          </CardsStyle>
        </CardContainer>

        <CardContainer>
          <CardsStyle>
            {product &&
              findProducts(text).beverage.map((card) => {
                return (
                  <Card
                    key={card.id}
                    card={card}
                    title={"Bebidas"}
                    handleCardClick={handleCardClick}
                    selected={selectedProduct.includes(card.id)}
                    addProducts={addProducts}
                  />
                );
              })}
          </CardsStyle>
        </CardContainer>
      </Container>
      <Car
        click={click}
        setClick={setClick}
        shoppingCart={shoppingCart}
        removeProducts={removeProducts}
      />
    </Main>
  );
}
