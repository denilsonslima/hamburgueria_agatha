import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: calc(100vh - 80px);
  margin-top: 80px;
  padding-top: 30px;
  overflow-y: auto;
`;

export const Container = styled.div`
  max-width: 100vw;
  width: 90%;
  margin: 0 auto;
  overflow-x: hidden;
`;

export const CardContainer = styled.div`
  padding: 0 20px;
  position: relative;
  &:hover div {
    opacity: 1;
  }
`;

export const CardsStyle = styled.div`
  width: min-content;
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
`;

export const Car = styled.div`
  display: ${(props) => (props.click ? "flex" : "none")};
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(51, 51, 51, 0.5);
  > div {
    width: min(500px, 90%);
    height: 58px;
    margin-top: 80px;
    > header {
      height: 58px;
      background: #27ae60;
      padding: 0 22px;
      border-radius: 5px 5px 0px 0px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > span {
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: #fff;
      }

      > :nth-child(2) {
        display: inline-block;
        width: 35px;
        height: 35px;
        line-height: 35px;
        text-align: center;
        border-radius: 50%;
        opacity: 0.3;
        :hover {
          background-color: rgba(1, 1, 1, 0.1);
          opacity: 0.8;
          cursor: pointer;
        }
      }
    }
    > div {
      height: 158px;
      background-color: #fff;
      color: #000;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      gap: 10px;

      font-family: "Inter";
      > p {
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
      }
      > span {
        font-size: 14px;
        line-height: 24px;
        color: #828282;
      }
    }
  }
`;
