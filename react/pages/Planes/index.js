import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { PlaneContext } from '../../context/PlaneContext';
import {
  KeyboardView,
  Title,
  Container,
  Back,
  Input,
  Scroll,
  TextMap,
  ButtonSubmit,
  TextButton,
  DeleteButton,
  UpdateButton,
} from './styles';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { db } from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function Planes() {
  const planeCtx = useContext(PlaneContext);
  const [resultados, setResultados] = useState();

  const navigation = useNavigation();
  const TelaCadastrarAviao = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'RegisterPlanes',
      })
    );
  };
  const TelaAtualizarAviao = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'UpdatePlanes',
      })
    );
  };

  const deletarPlane = () => {
    deleteDocument('aviao', resultados.id);
  };

  useEffect(async () => {
    const results = await getDocs(collection(db, 'aviao'));
    setResultados(results.docs);
  }, []);

  return (
    <KeyboardView>
      <Container>
        <Title>Lista de Avioes</Title>
        <Scroll>
          {resultados?.map((resultado) => {
            return (
              <Back>
                <TextMap>
                  MSN: {resultado.data().msn}
                  {'\n'}
                  MODELO: {resultado.data().modelo}
                </TextMap>
                <View style={{ flexDirection: 'row' }}>
                  <DeleteButton onPress={deletarPlane}>
                    <TextButton>❌</TextButton>
                  </DeleteButton>
                  <UpdateButton
                    onPress={() => {
                      planeCtx.setPlane(resultado);
                      TelaAtualizarAviao();
                    }}>
                    <TextButton>✏️</TextButton>
                  </UpdateButton>
                </View>
              </Back>
            );
          })}
        </Scroll>
        <ButtonSubmit onPress={TelaCadastrarAviao}>
          <TextButton>Novo Aviao</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Planes;
