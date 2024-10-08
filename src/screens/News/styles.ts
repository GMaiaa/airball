import styled, { css } from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderNews = styled.View`
  flex-direction: row;
  align-items: center; 
  padding: 16px; 
`;

export const TitleHeader = styled.Text`
  flex: 1; 
  text-align: center; 
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const NotIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))`
  right: 10px;
  position: absolute;
`;
