import { useState } from "react";
import styled from "styled-components";
import { FaTrash } from "react-icons/fa";

export default function CartItem({
  car,
  removeProducts,
  addQuantity,
  removeQuantity,
}) {
  const [count, setCount] = useState(1);

  const add = (id) => {
    setCount(count + 1);
    addQuantity(id);
  };

  const remove = (id) => {
    if (count > 0) {
      setCount(count - 1);
      removeQuantity(id);
    }
  };

  return (
    <Container>
      <div>
        <img src={car.image} alt="oi" />
      </div>
      <div>
        <p>{car.name}</p>
        <div>
          <span onClick={() => remove(car.id)}>-</span>
          <span>{count}</span>
          <span onClick={() => add(car.id)}>+</span>
        </div>
      </div>
      <div>
        <FaTrash onClick={() => removeProducts(car)} />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  position: relative;
  > div:first-child {
    width: 80px;
    background-color: #e0e0e0;
    border-radius: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    > img {
      width: 80%;
    }
  }
  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > p {
      font-family: "Inter";
      font-size: 18px;
      font-weight: 700;
      color: #333333;
    }
    > div {
      display: flex;
      width: 110px;
      height: 34px;
      justify-content: space-between;
      align-items: center;
      background-color: #f2f2f2;
      > span:nth-child(2n - 1) {
        display: inline-block;
        width: 30px;
        text-align: center;
        font-family: "Inter";
        font-size: 22px;
        line-height: 22px;
        color: #eb5757;
      }
      > span:nth-child(2) {
        display: inline-flexbox;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        height: 90%;
        width: 50px;
      }
      > span {
        cursor: pointer;
      }
    }
  }
  > div:nth-child(3) {
    width: 20px;
    height: 25px;
    position: absolute;
    top: 0;
    right: 0;
    > svg {
      height: 100%;
      color: #bdbdbd;
      cursor: pointer;
    }
  }
`;
