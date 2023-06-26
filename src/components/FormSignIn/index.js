import { Link, useNavigate } from "react-router-dom";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { toast } from "react-toastify";
import {
  Auth,
  Line,
  LineContainer,
  OrText,
  StyleForm,
  Container,
} from "../Form/styles";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../services/firebase";
import google from "../../assets/images/google.svg";
import { useState } from "react";
import axios from "axios";

export default function FormLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/auth/signin`,
        form
      );
      localStorage.setItem("token", data.token);
      toast("Login realizado com sucesso!");
      navigate("/home");
    } catch (error) {
      toast("Tente novamente mais tarde!");
    }
  };

  return (
    <Container>
      <h3>Login</h3>
      <StyleForm onSubmit={handleSubmit}>
        <div>
          <Input
            type="email"
            name="email"
            placeholder=" "
            handleForm={handleForm}
            required
          />
          <span>Email</span>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            placeholder=" "
            handleForm={handleForm}
            required
          />
          <span>Senha</span>
        </div>
        <Button type="submit" color="#219653">
          Logar
        </Button>
      </StyleForm>

      <div style={{ display: "flex", justifyContent: "center" }}>
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
