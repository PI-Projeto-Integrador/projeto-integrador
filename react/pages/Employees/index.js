import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  KeyboardView,
  Title,
  Container,
  TextMap,
  ButtonSubmit,
  Scroll,
  TextButton,
  UpdateButton,
  DeleteButton,
  Back,
} from './styles';
import { useNavigation, CommonActions } from '@react-navigation/core';

import { db } from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function Employees() {
  const [resultados, setResultados] = useState();
  const [mockEmployee, setMockEmployee] = useState([
    { nomeFuncionario: 'Joel', cargo: 'Tecnico' },
    { nomeFuncionario: 'Pires', cargo: 'Tecnico' },
    { nomeFuncionario: 'Luccas', cargo: 'Tecnico' },
  ]);

  const navigation = useNavigation();
  const TelaCadastrarFuncionario = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'RegisterEmp',
      })
    );
  };
  const TelaAtualizarFuncionario = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'UpdateEmployee',
      })
    );
  };

  useEffect(async () => {
    const results = await getDocs(collection(db, 'funcionario'));
    setResultados(results.docs);
  }, []);

  return (
    <KeyboardView>
      <Container>
        <Title>Lista de Funcionários</Title>
        <Scroll>
          {resultados?.map((resultado) => {
            return (
              <Back>
                <TextMap>
                  Nome: {resultado.data().nomeFuncionario}
                  {'\n'}
                  Cargo: {resultado.data().cargo}
                </TextMap>
                <View style={{ flexDirection: 'row' }}>
                  <DeleteButton>
                    <TextButton>❌</TextButton>
                  </DeleteButton>
                  <UpdateButton onPress={TelaAtualizarFuncionario}>
                    <TextButton>✏️</TextButton>
                  </UpdateButton>
                </View>
              </Back>
            );
          })}
        </Scroll>
        <ButtonSubmit onPress={TelaCadastrarFuncionario}>
          <TextButton>Novo Funcionário</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Employees;
