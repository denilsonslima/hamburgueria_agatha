import styled from "styled-components";

export const CardStyle = styled.div`
  width: 300px;
  height: 346px;
  display: flex;
  flex-direction: column;
  border: 2px solid #e0e0e0;
  border-color: ${(props) => (props.selected ? "#27AE60" : "#E0E0E0")};
  border-radius: 5px;
  &:hover {
  }

  > :nth-child(1) {
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    height: 150px;
    margin-bottom: 25px;
    > img {
      height: 100%;
    }
  }

  > :nth-child(2) {
    padding: 0 20px;
    > h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      margin-bottom: 20px;
    }

    > span {
      display: inline-block;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 14px;
      color: #828282;
    }

    > p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 14px;
      color: #27ae60;
    }

    > h2,
    span,
    p {
      pointer-events: none;
    }

    > button {
      width: 106px;
      height: 40px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      color: #ffffff;
      cursor: pointer;
      background: #e0e0e0;
      background-color: ${(props) => (props.selected ? "#27AE60" : "#E0E0E0")};
      border: 2px solid #e0e0e0;
      border-color: ${(props) => (props.selected ? "#27AE60" : "#E0E0E0")};
      border-radius: 8px;
    }
  }
`;
