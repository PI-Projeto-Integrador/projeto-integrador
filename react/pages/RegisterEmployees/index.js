import React, { useEffect, useState } from 'react';

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from './styles';

import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.js';

function RegisterEmployees() {
  const [nome, setNome] = useState(nome);
  const [cpf, setCpf] = useState(cpf);
  const [data, setData] = useState(data);
  const [telefone, setTelefone] = useState(telefone);
  const [login, setLogin] = useState(login);
  const [senha, setSenha] = useState(senha);
  const [tipo, setTipo] = useState(tipo);
  const [idlogradouro, setidlogradouro] = useState(idlogradouro);

  const payload = {
    nomeFuncionario: nome,
    cpfFuncionario: cpf,
    dataNascimentoFuncionario: data,
    telefoneFuncionario: telefone,
    loginFuncionario: login,
    senhaFuncionario: senha,
    tipo: tipo,
    idLogradouroFK: parseInt(idlogradouro),
  };

  async function adicionarAeronave() {
    try {
      // aqui é atribuido a função addDoc (cuja função é adicionar um documento no firebase) a constante docRef
      // os parâmetros são a ligação pro firestore ( getFirestore()) e a collection que o documento será adicionado
      const docRef = await addDoc(collection(db, 'colecaoTeste'), payload);
      console.log('Documento adicionado com sucesso! ID: ', docRef.id);
    } catch (err) {
      console.error(err);
    }
  }

  const clickHandler = async () => {
    adicionarAeronave();
  };

  return (
    <KeyboardView>
      <Container>
        <Title>Cadastrar Funcionário</Title>
        <Input
          placeholderTextColor="#fff"
          placeholder="Nome"
          value={nome}
          onChangeText={(texto) => setNome(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="CPF"
          value={cpf}
          onChangeText={(texto) => setCpf(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Data de Nascimento"
          value={data}
          onChangeText={(texto) => setData(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Telefone"
          value={telefone}
          onChangeText={(texto) => setTelefone(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Login"
          value={login}
          onChangeText={(texto) => setLogin(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Senha"
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Tipo"
          value={tipo}
          onChangeText={(texto) => setTipo(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Id Logradouro"
          value={idlogradouro}
          onChangeText={(texto) => setidlogradouro(texto)}
        />

        <ButtonSubmit onPress={clickHandler}>
          <TextButton>Cadastrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default RegisterEmployees;
