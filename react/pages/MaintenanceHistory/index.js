import React, { useEffect, useState } from 'react';

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

import { db } from '../../config/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

function MaintenanceHistory() {
  const [resultados, setResultados] = useState();
  const arrayOfObjects = [
    { Manutencao: 'XXXX ', Funcionario: 'José', Data: '20/10/2022', id: '1' },
    { Manutencao: 'XXXX ', Funcionario: 'José', Data: '20/10/2022', id: '2' },
    { Manutencao: 'XXXX ', Funcionario: 'José', Data: '20/10/2022', id: '1' },
  ];

  useEffect(async () => {
    const results = await getDocs(collection(db, 'historicoManutencao'));
    setResultados(results.docs);
  }, []);

  return (
    <KeyboardView>
      <Container>
        <Title>Histórico de Manutenção</Title>
        <Scroll>
          {resultados?.map((resultado) => {
            return (
              <Back>
                <TextMap>
                  CPF do Funcionario: {resultado.data().data.cpf}
                  {'\n'}
                  Manutenção:
                  {resultado.data().data.titulo}
                  {'\n'}
                  Data:
                  {resultado.data().data.dataInicioManutencao}
                  {'\n'}
                  MSN do Aviao:
                  {resultado.data().data.msnAviao}
                </TextMap>
              </Back>
            );
          })}
        </Scroll>
      </Container>
    </KeyboardView>
  );
}

export default MaintenanceHistory;
