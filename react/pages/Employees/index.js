import React from "react";
import {
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
} from "./styles";
import { useNavigation, CommonActions } from "@react-navigation/core";

function RegisterEmployees() {
  const navigation = useNavigation();
  const TelaCadastrarFuncionario = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "RegisterEmp",
      })
    );
  };
  return (
    <KeyboardView>
      <Container>
        <Title>Lista de Funcionários</Title>

        <ButtonSubmit onPress={TelaCadastrarFuncionario}>
          <TextButton>Novo Funcionário</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default RegisterEmployees;
