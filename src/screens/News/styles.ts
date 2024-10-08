import styled, { css } from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderNews = styled.View`
  flex-direction: row;
  align-items: center; /* Centraliza verticalmente */
  padding: 16px; /* Adiciona espaçamento ao redor do cabeçalho */
`;

export const TitleHeader = styled.Text`
  flex: 1; /* Faz o título ocupar o espaço disponível */
  text-align: center; /* Centraliza o texto horizontalmente */
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
  margin-left: auto; /* Move o ícone para a direita */
`;
