import styled, { css } from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

export const Container = styled.View`
  width: 100%;
  padding: 20px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start; 
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const LocWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LocText = styled.Text`
margin-left: 10px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const LocIcon = styled(Entypo).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;

export const NotIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))``;


export const BackButton = styled.TouchableOpacity`
  padding: 10px;
  position: absolute;
  left: 20px; 
`;
