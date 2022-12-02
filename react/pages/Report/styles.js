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
export const TextMap = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;
export const Back = styled.View`
  background-color: #5a86fd;
  border-radius: 1px;
  width: 60%;
  padding: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Scroll = styled.ScrollView`
  width: 110%;
  margin-top: 40px;
  height: 40%;
  margin-left: 160px;
`;
export const InputReport = styled.TextInput`
  border: 2px solid #fff;
  padding: 15px 15px;
  color: #fff;
  font-size: 20px;
  border-radius: 9px;
  width: 90%;
  height: 200px;
  top: 50px;
  text-align-vertical: top;
  borderwidth: 1;
`;
export const TextReport = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  bottom: 140px;
  margin-bottom: 10px;
`;
