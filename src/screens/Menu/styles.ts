import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";

interface SizeProps {
  size: any;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  
`;

export const IconButton = styled(TouchableOpacity)`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Entypo).attrs(({ theme }) => ({
  size: 40,
  color: theme.COLORS.GRAY_100,
}))``;

export const ProfilePic = styled.Image<SizeProps>`
  width: ${({ size }) => (size === "small" ? "80px" : "90px")}; 
  height: ${({ size }) => (size === "small" ? "80px" : "90px")};
  border-radius: ${({ size }) => (size === "small" ? "40px" : "45px")};
`;

export const UserInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 30px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const UserPositionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserPosition = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;


export const  UserNamePosition = styled.View`
  
`;

export const EditPositionArea = styled.TouchableOpacity`
  margin-top:10px;
  flex-direction: row;
  gap:10px;
`;