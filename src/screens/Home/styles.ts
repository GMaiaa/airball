// styles.ts

import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
    padding: 20px 20px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    width: 300px;
    text-align: center; /* Remover as aspas de 'center' */
    margin-bottom: 20px; /* Corrigido a vírgula para ponto e vírgula */
`;

export const CourtWrapper = styled.View`
    width: 100%;
    margin-top: 35px;
`;

export const HeaderWrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    width: 100%;
`;

export const TitleSection = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;

export const IconButton = styled(TouchableOpacity)`
    width: 28px;
    height: 24px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const Icon = styled(Entypo).attrs(({theme}) => ({
    size: 18,
    color: theme.COLORS.GRAY_100
}))``;

// Novo estilo para a lista de jogos populares
export const GamesList = styled.FlatList`
    height: 180px; // altura fixa
`;
