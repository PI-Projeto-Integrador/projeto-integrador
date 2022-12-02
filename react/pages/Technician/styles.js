import styled from "styled-components/native";

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;

  align-items: center;
  justify-content: center;
  background-color: #133379;
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
  margin-bottom: 0px;
  bottom: 720px;
  position: absolute;
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
  background-color: #5a86fd;
  border-radius: 9px;
  width: 90%;
  padding: 15px;
  align-items: center;
  top: 650px;
  position: absolute;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
export const TextMap = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;

export const DeleteButton = styled.TouchableOpacity`
  align-items: center;
  border-radius: 10px;
  margin-top: 10px;
  width: 15%;
`;
export const UpdateButton = styled.TouchableOpacity`
  align-items: center;
  width: 20%;
  margin-top: 10px;
  margin-left: 40px;
`;
export const Back = styled.View`
  background-color: #5a86fd;
  border-radius: 10px;
  width: 60%;
  padding: 10px;
  margin-bottom: 25px;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  width: 110%;
  margin-top: 40px;
  height: 40%;
  margin-left: 140px;
`;
