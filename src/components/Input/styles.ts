import theme from "@theme/index";
import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputTypeStyleProps = 'DEFAULT' | 'FILE';

type InputFieldProps = {
    isFocused: boolean;
    hasContent: boolean;
    isTextarea?: boolean;
    isInvalid?: boolean; 
};

export const Container = styled.View`
    margin: 0px 0;
    border-radius: 5px;
`;

export const InputField = styled(TextInput)<InputFieldProps>`
    ${({ theme, isFocused, hasContent, isTextarea, isInvalid }) => css`
        background-color: ${theme.COLORS.WHITE};
        width: 100%;
        padding: 12px;
        margin-bottom: 8px;
        border-radius: 5px;
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        border: 2px solid ${
            isInvalid ? theme.COLORS.DANGER : 
            hasContent ? theme.COLORS.GRAY_200 : 
            isFocused ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300
        };

        /* Ajustar a altura se for textarea */
        height: ${isTextarea ? '150px' : 'auto'};

        /* Estilo do cursor */
        caret-color: ${theme.COLORS.BLUE};

        /* Personalização do foco */
        ${isFocused && !isInvalid && `
            border-color: ${theme.COLORS.BLUE};
        `}
    `}
`;

export const Label = styled.Text`
    margin-bottom: 7px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`;

export const PickerContainer = styled.View`
    border: 2px solid ${theme.COLORS.GRAY_300};
    border-radius: 5px;
    background-color: ${theme.COLORS.GRAY_700};
    margin-bottom: 20px;
`;

export const FormControlError = styled.View`
    margin-top: 4px;
`;

export const FormControlErrorText = styled.Text`
    color: ${theme.COLORS.DANGER};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
`;
