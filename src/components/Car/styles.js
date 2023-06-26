import styled from "styled-components";

export const CarStyles = styled.div`
  display: ${(props) => (props.click ? "block" : "none")};
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  background: rgba(51, 51, 51, 0.5);
  > div {
    width: min(500px, 90%);
    margin: 80px auto 50px;
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
      background-color: #fff;
      padding: 20px 25px;
      > hr {
        border: none;
        background-color: #e0e0e0;
        height: 2px;
      }
      > hr + div {
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
        > span:nth-child(1) {
          color: #333333;
        }
        > span:nth-child(2) {
          color: #828282;
        }
        > span {
          font-family: "Inter";
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
  }
`;

export const Description = styled.div`
  height: 100%;
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
`;
