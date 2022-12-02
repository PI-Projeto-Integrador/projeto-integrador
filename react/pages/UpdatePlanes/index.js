import React, { useState, useContext, useEffect } from 'react';
import { PlaneContext } from '../../context/PlaneContext';

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from './styles';

function UpdatePlanes() {
  const planeCtx = useContext(PlaneContext);
  const [modelo, setModelo] = useState('');

  useEffect(() => {
    setModelo(planeCtx.plane.Modelo);
  }, []);
  return (
    <KeyboardView>
      <Container>
        <Title>Atualizar Avião</Title>
        <Title>MSN: {planeCtx.plane.data().msn}</Title>

        <Input
          placeholderTextColor="#fff"
          value={modelo}
          onChangeText={(texto) => setModelo(texto)}
        />
        <ButtonSubmit>
          <TextButton>Atualizar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default UpdatePlanes;
