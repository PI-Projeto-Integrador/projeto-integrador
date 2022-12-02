import React, { useState } from 'react';

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  Name,
} from './styles';

import { addDocument } from '../../queries/addDocument.js';

function RegisterMaintenance() {
  const [titulo, setTitulo] = useState(titulo);
  const [descricao, setDescricao] = useState(descricao);
  const [dataInicioManutencao, setDataInicioManutencao] =
    useState(dataInicioManutencao);
  const [msnAviao, setMsnAviao] = useState(msnAviao);
  const [cpfFuncionario, setCpfFuncionario] = useState(cpfFuncionario);
  const [hangarManutencao, setHangarManutencao] = useState(hangarManutencao);

  const payload = {
    titulo: titulo,
    descricao: descricao,
    dataInicioManutencao: dataInicioManutencao,
    msnAviao: msnAviao,
    cpfFuncionario: cpfFuncionario,
    hangarManutencao: hangarManutencao,
  };

  const clickHandler = () => {
    addDocument('manutencao', payload);
  };

  return (
    <KeyboardView>
      <Container>
        <Title>Iniciar Manutenção</Title>
        <Input
          placeholderTextColor="#fff"
          placeholder="Título"
          value={titulo}
          onChangeText={(texto) => setTitulo(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Descrição"
          value={descricao}
          onChangeText={(texto) => setDescricao(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Inicio Manutenção"
          value={dataInicioManutencao}
          onChangeText={(texto) => setDataInicioManutencao(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="MSN Avião"
          value={msnAviao}
          onChangeText={(texto) => setMsnAviao(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="CPF do funcionário"
          value={cpfFuncionario}
          onChangeText={(texto) => setCpfFuncionario(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Hangar da manutenção"
          value={hangarManutencao}
          onChangeText={(texto) => setHangarManutencao(texto)}
        />

        <Name></Name>
        <ButtonSubmit onPress={clickHandler}>
          <TextButton>Iniciar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default RegisterMaintenance;
