import styled from "styled-components";
import { FiShoppingBag } from "react-icons/fi";

export default function Logo() {
  return (
    <StyleSection>
      <h1>
        Burguer <span>Ágatha</span>
      </h1>
      <StyleDescription>
        <div>
          <FiShoppingBag />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes.
        </p>
      </StyleDescription>
      <StyleContainer>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </StyleContainer>
    </StyleSection>
  );
}

const StyleSection = styled.section`
  max-width: 377px;
  margin-bottom: 30px;
  h1 {
    font-family: "Inter";
    font-size: 40px;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 22px;
    span {
      font-size: 23px;
      color: #eb5757;
    }
  }
`;

const StyleDescription = styled.div`
  width: 100%;
  height: 95px;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 17px 14px;
  gap: 20px;
  > div {
    min-width: 60px;
    height: 60px;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: #219653;
      width: 18px;
      height: 20px;
    }
  }
  > p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #828282;
  }
`;

const StyleContainer = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 23px;
  margin-top: 30px;
  div {
    height: 10px;
    width: 10px;
    background-color: #F2F2F2;
    border-radius: 50%;
  }

  @media (max-width: 768px){
        display: none;
    }
`;
