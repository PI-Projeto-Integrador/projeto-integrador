import React, { useState } from "react";

import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";
import Header from "../../components/Header";
import { Alert } from "react-native";
import { useNavigation, CommonActions } from "@react-navigation/core";

function Signin() {
  //contas
  const mock = { user: "rh", senha: "123" };
  const mock_2 = { user: "hangar", senha: "123" };
  const mock_3 = { user: "gerente", senha: "123" };
  const mock_4 = { user: "tecnico", senha: "123" };

  //telas
  const navigation = useNavigation();
  const TelaFuncionarios = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Employees",
      })
    );
  };

  const TelaGerenteDeHangar = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Planes",
      })
    );
  };
  //validar usuario
  const clickHandler = () => {
    if (input == mock.user && senha == mock.senha) {
      console.log("Login efetuado na conta Funcionário RH");
      TelaFuncionarios();
    } else if (input == mock_2.user && senha == mock_2.senha) {
      console.log("Login efetuado na conta Gerente de Hangar");
      TelaGerenteDeHangar();
    } else Alert.alert("Login ou senha invalidos");
  };
  //pegar dados
  const [input, setInput] = useState(input);
  const [senha, setSenha] = useState(senha);
  return (
    <KeyboardView>
      <Header> </Header>
      <Container>
        <Title>Login</Title>
        <Input
          placeholderTextColor="#fff"
          placeholder="E-mail"
          value={input}
          onChangeText={(texto) => setInput(texto)}
        />
        <Input
          placeholderTextColor="#fff"
          placeholder="Senha"
          value={senha}
          onChangeText={(texto) => setSenha(texto)}
          secureTextEntry
        />
        <ButtonSubmit onPress={clickHandler}>
          <TextButton>Entrar</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Signin;
