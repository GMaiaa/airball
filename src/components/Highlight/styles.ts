import styled, {css} from "styled-components/native";

export const Container = styled.View`
`

export const Title = styled.Text`
    margin-left:48px;
    margin-top:128px;

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`

export const Subtitle = styled.Text`
    margin-left: 48px;
    margin-bottom: 20px;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    `};
`