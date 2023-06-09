import { Link } from "react-router-dom";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { StyleForm, Container } from "../Form/styles";

export default function FormSignUp() {
  return (
    <Container>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <h3>Cadastro</h3>
        <div>
          <Link to="/">
            <span style={{margin: 0}}>Retornar para login!</span>
          </Link>
        </div>
      </div>

      <StyleForm>
        <div>
          <Input type="text" name="name" placeholder=" " required />
          <span>Name</span>
        </div>
        <div>
          <Input type="email" name="email" placeholder=" " required />
          <span>Email</span>
        </div>
        <div>
          <Input type="password" placeholder=" " required />
          <span>Senha</span>
        </div>
        <div>
          <Input type="password" placeholder=" " required />
          <span>Confirmar Senha</span>
        </div>
        <Button type="submit">Cadastrar</Button>
      </StyleForm>
    </Container>
  );
}
