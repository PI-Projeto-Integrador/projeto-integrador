import React, { useState, useContext, useEffect } from 'react';
import { EmployeeContext } from '../../context/EmployeeContext';
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from './styles';

function UpdateEmployees() {
  const employeeCtx = useContext(EmployeeContext);

  const [nome, setNome] = useState(nome);
  const [cpf, setCpf] = useState(cpf);
  const [data, setData] = useState(data);
  const [telefone, setTelefone] = useState(telefone);
  const [login, setLogin] = useState(login);
  const [senha, setSenha] = useState(senha);
  const [cargo, setCargo] = useState(cargo);
  const [idlogradouro, setIdlogradouro] = useState(idlogradouro);
  useEffect(() => {
    setNome(employeeCtx.employee.nome);
    setCpf(employeeCtx.employee.cpf);
    setData(employeeCtx.employee.data);
    setTelefone(employeeCtx.employee.telefone);
    setLogin(employeeCtx.employee.login);
    setSenha(employeeCtx.employee.senha);
    setCargo(employeeCtx.employee.cargo);
    setLogin(employeeCtx.employee.login);
  }, []);

  const payload = {
    nomeFuncionario: nome,
    cpfFuncionario: cpf,
    dataNascimentoFuncionario: data,
    telefoneFuncionario: telefone,
    loginFuncionario: login,
    senhaFuncionario: senha,
    cargo: cargo,
  };

  const clickHandler = () => {};

  return (
    <KeyboardView>
      <Container>
        <Title>Atualizar Funcionário</Title>
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
          placeholder="cargo"
          value={cargo}
          onChangeText={(texto) => setCargo(texto)}
        />

        <ButtonSubmit onPress={clickHandler}>
          <TextButton>Atualizar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default UpdateEmployees;
