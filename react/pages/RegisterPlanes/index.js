import React, { useState } from 'react';

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from './styles';

import { addDocument } from '../../queries/addDocument.js';

function RegisterPlanes() {
  const [msn, setMsn] = useState(msn);
  const [modelo, setModelo] = useState(modelo);

  const payload = {
    msn: msn,
    modelo: modelo,
  };

  const clickHandler = () => {
    addDocument('aviao', payload);
  };

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

        <ButtonSubmit onPress={clickHandler}>
          <TextButton>Cadastrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default RegisterPlanes;
