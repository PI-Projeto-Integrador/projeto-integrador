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

function Manager() {
  const navigation = useNavigation();
  const TelaMaintenance = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "Maintenance",
      })
    );
  };
  const TelaMaintenanceHistory = () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: "MaintenanceHistory",
      })
    );
  };
  return (
    <KeyboardView>
      <Container>
        <Title>Menu</Title>

        <ButtonSubmit>
          <TextButton onPress={TelaMaintenance}>
            Gerenciar Manutenção
          </TextButton>
        </ButtonSubmit>
        <ButtonSubmit onPress={TelaMaintenanceHistory}>
          <TextButton>Histórico de Manutenção</TextButton>
        </ButtonSubmit>
      </Container>
    </KeyboardView>
  );
}

export default Manager;
