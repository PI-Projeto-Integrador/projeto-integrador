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
  const TelaCadastrarAviao = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "RegisterPlanes",
      })
    );
  };
  return (
    <KeyboardView>
      <Container>
        <Title>Lista de Avioes</Title>

        <ButtonSubmit onPress={TelaCadastrarAviao}>
          <TextButton>Novo Aviao</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default RegisterEmployees;
