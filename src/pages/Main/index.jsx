import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import {
  Container,
  ImgLogo,
  Title,
  FormContainer,
  Button,
  Input,
} from "./styles";
import logoGithub from "../../assets/images/github-logo.svg";

function MainPage() {
  const [login, setLogin] = useState("");

  return (
    <Container>
      <ImgLogo src={logoGithub} alt="logo do github" />
      <Title>Github Consulta</Title>
      <FormContainer>
        <Input
          placeholder="Busque um usuário"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <Button to={`${login}/repositories`}>
          <BsSearch fontSize={32} />
        </Button>
      </FormContainer>
    </Container>
  );
}

export default MainPage;
