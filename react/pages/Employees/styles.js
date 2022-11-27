import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;

  align-items: center;
  justify-content: center;
  background-color: rgba(2, 0, 36, 1);
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
  padding-bottom: 30px;
  width: 90%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 60px;
  bottom: 270px;
`;

export const Input = styled.TextInput`
  border: 2px solid #fff;
  margin-bottom: 30px;
  padding: 15px 20px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #a287f4;
  border-radius: 9px;
  width: 90%;
  padding: 15px;
  align-items: center;
  top: 250px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
