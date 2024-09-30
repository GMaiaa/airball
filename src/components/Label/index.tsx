import React from 'react';
import { TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";


type Props = TextInputProps & {
    text: string;
};

export function Label({ text }: Props) {
    return (
        <>
            <StyledLabel>{text}</StyledLabel>
        </>
    );
}

const StyledLabel = styled.Text`
margin-bottom: 7;
${({ theme }) => css`
      color: ${theme.COLORS.GRAY_100};
      font-size: ${theme.FONT_SIZE.SM}px;
      font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`

