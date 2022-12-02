import React, { useEffect, useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { TechnicianContext } from '../../context/TechnicianContext';
import {
  KeyboardView,
  Title,
  Container,
  Scroll,
  Back,
  TextMap,
  ButtonSubmit,
  TextButton,
} from './styles';
import { useNavigation, CommonActions } from '@react-navigation/core';

import { db } from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function Technician() {
  const technicianCtx = useContext(TechnicianContext);
  const [resultados, setResultados] = useState();

  const navigation = useNavigation();

  const TelaReport = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'Report',
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
        <Title>Selecionar Manutencao</Title>
        <Scroll>
          {resultados?.map((resultado) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  technicianCtx.setTechnician(resultado);
                  TelaReport();
                }}>
                <Back>
                  <TextMap>
                    MSN: {resultado.data().msnAviao}
                    {'\n'}
                    Manutenção:{resultado.data().titulo}
                    {'\n'}
                    Descrição:{resultado.data().descricao}
                  </TextMap>
                </Back>
              </TouchableOpacity>
            );
          })}
        </Scroll>
      </Container>
    </KeyboardView>
  );
}

export default Technician;
