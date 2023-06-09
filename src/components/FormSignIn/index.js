import { Link } from "react-router-dom";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { Auth, Line, LineContainer, OrText, StyleForm, Container } from "../Form/styles";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";
import google from "../../assets/images/google.svg"

export default function FormLogin() {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <h3>Login</h3>
      <StyleForm>
        <div>
          <Input type="email" name="name" placeholder=" " required />
          <span>Name</span>
        </div>
        <div>
          <Input type="password" placeholder=" " required />
          <span>Senha</span>
        </div>
        <Button type="submit" color="#219653">
          Logar
        </Button>
      </StyleForm>

      <div style={{display: "flex", justifyContent: "center"}}>
        <Link to="/signup">
          <span>Não tem uma conta? Cadastre-se!</span>
        </Link>
      </div>

      <LineContainer>
        <Line />
        <OrText>ou</OrText>
        <Line />
      </LineContainer>

      <Auth onClick={handleGoogleSignIn}>
        <img src={google} alt="login-com-google" />
      </Auth>
    </Container>
  );
}
