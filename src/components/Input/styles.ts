import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export type InputTypeStyleProps = 'DEFAULT' | 'FILE';

type InputFieldProps = {
  isFocused: boolean;
  hasContent: boolean;
};

export const Container = styled.View`
  margin: 10px 0;
  border-radius: 5px;
`;

export const InputField = styled(TextInput)<InputFieldProps>`
  ${({ theme, isFocused, hasContent }) => css`
    background-color: ${theme.COLORS.WHITE};
    padding: 12px;
    border-radius: 5px;
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    
    /* Lógica da borda */
    border: 2px solid ${
      hasContent ? theme.COLORS.GRAY_200 : isFocused ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_300
    };
    
    /* Estilo do cursor */
    caretColor: ${theme.COLORS.BLUE}; // Cor do cursor
    
    /* Personalização do foco */
    &:focus {
      outline: none;
      border-color: ${theme.COLORS.BLUE};
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.5);
    }
  `}
`;
