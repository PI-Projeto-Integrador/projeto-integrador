import React, { useState } from "react";

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  Name,
} from "./styles";

function UpdateMaintenance() {
  const name = "name";
  return (
    <KeyboardView>
      <Container>
        <Title>Alterar Manutenção</Title>
        <Input placeholderTextColor="#fff" placeholder="Título" />
        <Input placeholderTextColor="#fff" placeholder="Descrição" />
        <Input placeholderTextColor="#fff" placeholder="Inicio Manutenção" />
        <Input placeholderTextColor="#fff" placeholder="MSN Avião" />
        <Input placeholderTextColor="#fff" placeholder="CPF do funcionário" />

        <ButtonSubmit>
          <TextButton>Alterar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default UpdateMaintenance;
