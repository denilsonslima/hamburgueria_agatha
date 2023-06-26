import styled from "styled-components";

export default function Button({ children, type, color, generateWhatsAppLink  }) {
  return (
    <ButtonStyle type={type} color={color} onClick={generateWhatsAppLink}>
      {children}
    </ButtonStyle>
  );
}

const ButtonStyle = styled.button`
  background: ${(props) => props.color || "#F5F5F5"};
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  color: ${(props) => (props.color ? "#FFF" : "#999999")};
  border: none;

  width: 100%;
  height: 60px;
  border-radius: 8px;
  outline: none;

  :hover {
    background: ${(props) => (props.color ? "#93D7AF" : "#828282")};
    color: ${(props) => !props.color && "#E0E0E0"};
    letter-spacing: 0.15rem;
    cursor: pointer;
  }
`;
