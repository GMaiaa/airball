import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';


export const HeaderMatchs = styled.View`
  flex-direction: row;
  padding: 16px; /* Adiciona espaçamento ao redor do cabeçalho */
  align-items: flex-start; /* Alinha os itens ao início do eixo transversal (verticalmente) */
`;

export const TitleHeader = styled.Text`
  flex: 1; /* Faz o título ocupar o espaço disponível */
  margin-left: 24px;
  margin-top: 28px;
  margin-bottom: 20px; /* Espaçamento abaixo do título */
  ${({ theme }) => css`
    color: white;
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;


export const Line = styled.View`
height: 1px;
background-color:white;
width:90%;
align-self:center;
`;

export const FilterButton = styled.View`
  margin-top: 80px;
`;
