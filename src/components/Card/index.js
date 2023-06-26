import { CardStyle } from "./styles";

export default function Card({
  card,
  title,
  handleCardClick,
  selected,
  addProducts,
}) {
  const { id, name, price, image } = card;
  return (
    <CardStyle selected={selected} onClick={() => handleCardClick(id)}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{name}</h2>
        <span>{title}</span>
        <p>{`R$ ${price},00`}</p>
        <button onClick={() => addProducts(card)}>Adicionar</button>
      </div>
    </CardStyle>
  );
}
