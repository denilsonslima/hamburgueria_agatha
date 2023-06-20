import { Link, useNavigate } from "react-router-dom";
import Button from "../Form/Button";
import Input from "../Form/Input";
import { StyleForm, Container } from "../Form/styles";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function FormSignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirm_password) {
      toast.error("As senhas não coincidem");
      return;
    }

    try {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users`, body);
      toast.success("Cadastro realizado com sucesso!");
      navigate("/");
    } catch (error) {
      if(error.response.status === 409){
        return toast.error("Email já cadastrado!")
      }
      toast.error("Tente novamente mais tarde!");
    }
  };

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>Cadastro</h3>
        <div>
          <Link to="/">
            <span style={{ margin: 0 }}>Retornar para login!</span>
          </Link>
        </div>
      </div>

      <StyleForm onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            name="name"
            handleForm={handleForm}
            placeholder=" "
            required
          />
          <span>Name</span>
        </div>
        <div>
          <Input
            type="email"
            name="email"
            handleForm={handleForm}
            placeholder=" "
            required
          />
          <span>Email</span>
        </div>
        <div>
          <Input
            type="password"
            name="password"
            handleForm={handleForm}
            placeholder=" "
            required
          />
          <span>Senha</span>
        </div>
        <div>
          <Input
            type="password"
            name="confirm_password"
            handleForm={handleForm}
            placeholder=" "
            required
          />
          <span>Confirmar Senha</span>
        </div>
        <Button type="submit">Cadastrar</Button>
      </StyleForm>
    </Container>
  );
}
