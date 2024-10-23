import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'; // Importar o ícone

interface SizeProps {
  size: any;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const UserPictureArea = styled.TouchableOpacity`
  align-items: center; 
  margin-top: 50px; 
  position: relative; 
`;

export const ProfilePic = styled.Image<SizeProps>`
  width: ${({ size }) => (size === "small" ? "100px" : "120px")}; 
  height: ${({ size }) => (size === "small" ? "100px" : "120px")};
  border-radius: ${({ size }) => (size === "small" ? "50px" : "60px")};
  `;

export const CameraIcon = styled(Feather)`
  position: absolute; 
  margin-top:22%;
  right:38%;
  background-color:orange;
  border-radius:50px;
  width:30px;
  height:30px;
`;