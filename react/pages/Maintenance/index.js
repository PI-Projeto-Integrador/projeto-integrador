import React from "react";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";

function RegisterEmployees() {
  return (
    <KeyboardView>
      <Container>
        <Title>Iniciar Manutenção</Title>
        <Input placeholderTextColor="#fff" placeholder="XXXXX" />
        <Input placeholderTextColor="#fff" placeholder="XXXXX" />
        <Input placeholderTextColor="#fff" placeholder="XXXXX" />
        <Input placeholderTextColor="#fff" placeholder="XXXXX" />
        <ButtonSubmit>
          <TextButton>Cadastrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default RegisterEmployees;
