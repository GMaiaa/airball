import styled, { css } from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";

export const Container = styled.View`
    width: 220px;
    margin-top: 16px;
    margin-right: 16px;
`;

export const Photo = styled.Image`
    width: 100%;
    height: 125px;
    border-radius: 8px;
    margin-bottom: 8px;
`;

export const Infos = styled.View`
    flex-direction: column;
    justify-content: space-between;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: 10px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-bottom: 4px;
`;

export const SourceNews = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;
`;

export const SourceText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_300};
        font-size: 8px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const TimeNews = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const TimeText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_300};
        font-size: 8px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const LocIcon = styled(Entypo).attrs(({ theme }) => ({
    size: 14,
    color: theme.COLORS.GRAY_300,
}))``;
