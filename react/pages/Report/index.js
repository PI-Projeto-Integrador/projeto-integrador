import React, { useState, useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { TechnicianContext } from '../../context/TechnicianContext';
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
  InputReport,
  TextReport,
} from './styles';
import { useNavigation, CommonActions } from '@react-navigation/core';
import { addDocument } from '../../queries/addDocument.js';
import { deleteDocument } from '../../queries/deleteDocument.js';

function Report() {
  const technicianCtx = useContext(TechnicianContext);
  const [MSN, setMSN] = useState('');
  const [report, setReport] = useState(report);
  const navigation = useNavigation();
  const payload = { data: technicianCtx.technician.data(), report: report };

  const clickHandler = () => {
    addDocument('historicoManutencao', payload);
    deleteDocument('manutencao', technicianCtx.technician.id);
  };

  useEffect(() => {
    setMSN(technicianCtx.technician.MSN);
  }, []);
  return (
    <KeyboardView>
      <Container>
        <Title>Enviar relatório</Title>
        <TextReport>MSN: {technicianCtx.technician.data().msnAviao}</TextReport>
        <TextReport>
          Manutencao: {technicianCtx.technician.data().titulo}
        </TextReport>
        <TextReport>
          Descrição: {technicianCtx.technician.data().descricao}
        </TextReport>
        <InputReport
          multiline={true}
          numberOfLines={7}
          value={report}
          onChangeText={(texto) => setReport(texto)}></InputReport>
        <ButtonSubmit onPress={clickHandler}>
          <TextButton>Enviar Relatório</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Report;
