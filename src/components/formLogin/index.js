import styled from "styled-components";

export default function FormLogin() {
  return (
    <StyleSection>
      <h3>Login</h3>
      <StyleForm>
        <div>
          <input type="email" name="name" placeholder=" " required />
          <span>Name</span>
        </div>
        <div>
          <input type="password" placeholder=" " required />
          <span>Senha</span>
        </div>
        <StyleButton type="submit" color="#219653">
          Logar
        </StyleButton>
      </StyleForm>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <StyleButton>Cadastrar</StyleButton>
    </StyleSection>
  );
}

const StyleSection = styled.section`
  max-width: 500px;
  width: 100%;
  height: 460px;
  border: 2px solid #f5f5f5;
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 26px 24px;
  > h3 {
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
  p {
    max-width: 327px;
    height: 36px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #999999;
    margin: 19px auto 21px;
  }
`;

const StyleButton = styled.button`
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
    background: ${(props) => props.color ? "#93D7AF" : "#828282"};
    color: ${(props) => (!props.color && "#E0E0E0")};
  }
`;

const StyleForm = styled.form`
  div {
    position: relative;

    input {
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
    }

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

  div:nth-of-type(2) {
    margin-top: 25px;
    margin-bottom: 19px;
  }
`;
