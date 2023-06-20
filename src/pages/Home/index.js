import Card from "../../components/Card";
import Header from "../../components/header";
import { useState, useEffect } from "react";
import axios from "axios";
import { Car, CardContainer, CardsStyle, Container, Main } from "./styles";

export default function Home() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [selectedDrink, setSelectDrink] = useState([]);
  const [product, setProducts] = useState(false);
  const [click, setClick] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/products`
      );
      setProducts(products.data);
    };
    fetchProducts();
  }, []);

  const handleCardClick = (cardId, type) => {
    if (!selectedCards.includes(cardId) || !selectedDrink.includes(cardId)) {
      if (type === "food") {
        setSelectedCards([cardId]);
      } else {
        setSelectDrink([cardId]);
      }
    }
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

  return (
    <Main>
      <Container>
        <Header click={click} setClick={setClick} setText={setText} />
        <CardContainer>
          <CardsStyle>
            {product &&
              findProducts(text).burger.map((card) => {
                return (
                  <Card
                    key={card.id}
                    img={card.image}
                    price={card.price}
                    title={"Sanduíches"}
                    food={card.name}
                    handleCardClick={handleCardClick}
                    id={card.id}
                    selected={selectedCards.includes(card.id)}
                    type={"food"}
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
                    img={card.image}
                    price={card.price}
                    title={"Bebidas"}
                    food={card.name}
                    handleCardClick={handleCardClick}
                    id={card.id}
                    selected={selectedDrink.includes(card.id)}
                    type={"drink"}
                  />
                );
              })}
          </CardsStyle>
        </CardContainer>
      </Container>
      <Car click={click}>
        <div>
          <header>
            <span>Carrinho de compras</span>
            <span onClick={() => setClick(!click)}>X</span>
          </header>
          <div>
            <p>Sua sacola está vazia</p>
            <span>Adicione itens</span>
          </div>
        </div>
      </Car>
    </Main>
  );
}
