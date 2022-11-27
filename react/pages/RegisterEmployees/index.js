import React, { useState } from "react";

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";

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

  const clickHandler = () => {
    console.log(payload);
    fetch("https://localhost:3000/aviao/criar", {
      body: payload,
    });
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
