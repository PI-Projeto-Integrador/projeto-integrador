import React from "react";

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";

function RegisterPlanes() {
  const [msn, setMsn] = useState(msn);
  const [modelo, setModelo] = useState(modelo);
  return (
    <KeyboardView>
      <Container>
        <Title>Cadastrar Avião</Title>
        <Input
          placeholderTextColor="#fff"
          placeholder="MSN"
          value={msn}
          onChangeText={(texto) => setMsn(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Modelo"
          value={modelo}
          onChangeText={(texto) => setModelo(texto)}
        />

        <ButtonSubmit>
          <TextButton>Cadastrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default RegisterPlanes;
