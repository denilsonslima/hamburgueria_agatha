import { useEffect, useState } from "react";
import Button from "../Form/Button";
import CartItem from "./CartItem";
import { CarStyles, Description } from "./styles";

export default function Car({ click, setClick, shoppingCart, removeProducts }) {
  const [products, setProducts] = useState(shoppingCart);
  const [count, setCount] = useState(0)

  useEffect(() => {
    setProducts(shoppingCart);
  }, [shoppingCart]);

  useEffect(() => {
    let total = 0;
    for (const item of products) {
      total += parseFloat(item.price) * item.quantity;
    }
    setCount(total);
  }, [products]);

  const addQuantity = (cardId) => {
    const updatedCart = products.map((item) => {
      if (item.id === cardId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setProducts(updatedCart);
  };

  const removeQuantity = (cardId) => {
    const updatedCart = products.map((item) => {
      if (item.id === cardId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setProducts(updatedCart);
  };

  const generateWhatsAppLink = () => {
    const description = products.map((item) => `- ${item.quantity} ${item.name}`).join("\n"); // Inserir aqui a descrição do pedido
    const formattedTotal = count.toFixed(2).replace(".", ","); // Formatar o total
    const message = `Seu pedido: \n${description} \nR$ ${formattedTotal}`; // Mensagem do WhatsApp

    // Gerar o link do WhatsApp com a mensagem
    const link = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

    window.open(link, "_blank")
  };

  return (
    <CarStyles click={click}>
      <div>
        <header>
          <span>Carrinho de compras</span>
          <span onClick={() => setClick(!click)}>X</span>
        </header>
        <div>
          {shoppingCart.length !== 0 ? (
            <>
              {shoppingCart.map((car) => (
                <CartItem
                  key={car.id}
                  car={car}
                  removeProducts={removeProducts}
                  addQuantity={addQuantity}
                  removeQuantity={removeQuantity}
                ></CartItem>
              ))}
              <hr />
              <div>
                <span>Total</span>
                <span>R$ {count.toFixed(2).replace(".", ",")}</span>
              </div>
              <Button color="#219653" generateWhatsAppLink={generateWhatsAppLink}>Finalizar Pedidos</Button>
            </>
          ) : (
            <Description>
              <p>Sua sacola está vazia</p>
              <span>Adicione itens</span>
            </Description>
          )}
        </div>
      </div>
    </CarStyles>
  );
}
