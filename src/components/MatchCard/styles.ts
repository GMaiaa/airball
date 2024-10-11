import styled, { css } from 'styled-components/native';

export const Card = styled.View`
  background-color: #273b4a;
  padding: 20px;
  border-radius: 10px;
  margin: 10px;
  height:226px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: #fff;
    font-size: ${theme.FONT_SIZE.LG}px; /* Definindo o tamanho LG do tema */
    font-family: ${theme.FONT_FAMILY.SEMIBOLD}; /* Definindo a fonte semibold */
    margin-bottom: 10px;
  `}
`;

export const ProfileRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ProfilePic = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 20px;
  margin-left:-8px;
`;

export const UserIcon = styled.View`
 justify-content:center;
 align-items:center;
 border-radius:25px;
 width:54px;
 height:54px;
 background-color:white;
 padding:3px;
`;

export const GhostText = styled.Text`
  color: black;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR}; /* Definindo a fonte semibold */
  `}; 
`;

export const Timestamp = styled.Text`
  color: #fff;
  margin-bottom: 20px;
  margin-top:30px;
`;

export const Location = styled.Text`
  color: #fff;
  margin-left:10px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayButton = styled.TouchableOpacity`
  position:absolute;
  background-color:black;
  right:50px;
  bottom:50px;
  border-radius:10px;
  width:65px;
  height:38px;
  justify-content:center;
  align-items:center;
  flex-direction:row;
`;

export const PlayText = styled.Text`
  color: #fff;
  font-size: 12px;
`;


