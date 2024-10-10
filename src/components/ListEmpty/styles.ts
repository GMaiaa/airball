import styled, {css} from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    padding-top: 10px;
`

export const Message = styled.Text`
    text-align: center;
    justify-content: center;
    margin-left: 150px;

    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_300};
    `} 
`