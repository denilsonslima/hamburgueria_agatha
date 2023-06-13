import styled from "styled-components";

export const StyledSection = styled.section`
  max-width: 100vw;
  width: 100%;
  height: 100vh;
  padding: 40px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 62px;

  @media (max-width: 768px) {
    min-height: 100vh;
    height: 100%;
    flex-direction: column-reverse;
    gap: 0;
  }
`;

export const Container = styled.section`
  max-width: 500px;
  width: 100%;
  height: auto;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 26px 24px;
  > h3,
  > div h3 {
    display: inline-block;
    width: 53px;
    height: 30px;
    margin-bottom: 19px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  > div a span {
    display: inline-block;
    height: 18px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #999999;
    margin: 19px auto 21px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  div {
    position: relative;

    span {
      position: absolute;
      height: 20px;
      top: calc(50% - 10px);
      left: 18px;
      pointer-events: none;
      transition: 0.3s;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #999999;
      flex: none;
      order: 0;
      flex-grow: 0;
    }
  }

  button {
    margin-top: -5px;
  }
`;

export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Line = styled.hr`
  flex-grow: 1;
  border: none;
  height: 1px;
  background-color: #ccc;
`;

export const OrText = styled.span`
  margin: 0 10px;
  font-weight: bold;
  color: #999;
  pointer-events: none;
`;

export const Auth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & img:hover {
    cursor: pointer;
    animation: tremer 0.2s;
  }

  @keyframes tremer {
    0% {
      margin-left: 0;
    }
    25% {
      margin-left: 7px;
    }
    50% {
      margin-left: 0;
    }
    75% {
      margin-left: -7px;
    }
    100% {
      margin-left: 0;
    }
  }
`;
