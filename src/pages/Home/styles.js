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
