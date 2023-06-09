import styled from "styled-components";

export default function Input({ children, type, name, placeholder }) {
  return (
    <InputStyle type={type} name={name} placeholder={placeholder} required>
      {children}
    </InputStyle>
  );
}

const InputStyle = styled.input`
  width: 100%;
  height: 60px;
  border: 2px solid #f5f5f5;
  border-radius: 8px;
  background-color: #f5f5f5;
  padding: 20px 10px 20px 15px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #333333;

  :not(:placeholder-shown),
  :focus {
    background: #ffffff;
    border: 2px solid #333333;
  }

  :focus ~ span,
  :valid ~ span,
  :not(:placeholder-shown) ~ span {
    height: 15px;
    font-size: 12px;
    line-height: 15px;
    top: -8px;
    background-color: #fff;
    padding: 0 3px;
  }
`;
