import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import {
  KeyboardView,
  Title,
  Container,
  Scroll,
  Back,
  TextMap,
  ButtonSubmit,
  DeleteButton,
  UpdateButton,
  TextButton,
} from './styles';
import { useNavigation, CommonActions } from '@react-navigation/core';

import { db } from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function Maintenance() {
  const [resultados, setResultados] = useState();

  const navigation = useNavigation();
  const RegisterMaintenance = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'RegisterMaintenance',
      })
    );
  };

  const UpdateMaintenance = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'UpdateMaintenance',
      })
    );
  };

  useEffect(async () => {
    const results = await getDocs(collection(db, 'manutencao'));
    setResultados(results.docs);
  }, []);
  return (
    <KeyboardView>
      <Container>
        <Title>Lista de Manutenção</Title>
        <Scroll>
          {resultados?.map((resultado) => {
            return (
              <Back>
                <TextMap>
                  Manutencao: {resultado.data().titulo}
                  {'\n'}
                  Descricao: {resultado.data().descricao}
                  {'\n'}
                  Data de início: {resultado.data().dataInicioManutencao}
                </TextMap>
                <View style={{ flexDirection: 'row' }}>
                  <DeleteButton>
                    <TextButton>❌</TextButton>
                  </DeleteButton>
                  <UpdateButton onPress={UpdateMaintenance} id={resultado.id}>
                    <TextButton>✏️</TextButton>
                  </UpdateButton>
                </View>
              </Back>
            );
          })}
        </Scroll>
        <ButtonSubmit onPress={RegisterMaintenance}>
          <TextButton>Iniciar manutenção</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Maintenance;
