import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 0;
  margin: 0;
  width: 100%;
`;

export const TeamContainer = styled.View`
  background-color: #333;
  border-radius: 10px;
  padding: 15px;
  margin-bottom: 15px;
  width: 100%;
`;

export const TeamTitle = styled.Text`
  font-size: 18px;
  color: white;
`;

export const TeamMembers = styled.View`
  flex-direction: row;
  margin-top: 10px;
  width:100%;
`;

export const MemberImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: -5px;
`;

export const JoinButton = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 8px 20px;  /* Diminui o tamanho do botão */
  align-self: center;  /* Centraliza horizontalmente */
  background-color: black;
  border-radius: 8px;
`;

export const CreateTeamButton = styled.TouchableOpacity`
  background-color: #FF6B00; /* Orange background */
  padding: 10px 20px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  width:200px;
  height:50px;
  align-self:center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;