import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.SafeAreaView`
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

export const TextRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

export const RegisterText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

export const ButtonText = styled(TouchableOpacity)`
  margin-left: 5px;
`

export const TextLink = styled.Text`
    
     ${({ theme }) => css`
        color: ${theme.COLORS.ORANGE};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`

export const ForgotPassword = styled(TouchableOpacity)`
 align-self: flex-end;
  
`

export const ForgotText = styled.Text`
${({ theme }) => css`
color: ${theme.COLORS.GRAY_100};
font-size: ${theme.FONT_SIZE.SM}px;
font-family: ${theme.FONT_FAMILY.REGULAR};
`};
`