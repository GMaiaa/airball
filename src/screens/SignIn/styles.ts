import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

`

export const CommandsWrapper = styled.View`
    margin-top: 30px;
    align-items: center;
`

export const Form = styled.View`
    margin: 0 45px;

`

export const RegisterText = styled.Text`
    margin-top: 10px;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`

export const TextRow = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const ButtonText = styled(TouchableOpacity)`
 
   
`

export const TextLink = styled.Text`
    
     ${({ theme }) => css`
        color: ${theme.COLORS.ORANGE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`