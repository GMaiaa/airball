import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'FILLED' | 'TRANSPARENT';

type Props = {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity).attrs<Props>(({ theme, type }) => ({
    activeOpacity: 0.7,
})) <Props>`
    background-color: ${({ theme, type }) =>
        type === 'FILLED' ? theme.COLORS.ORANGE : 'transparent'};
    padding: 20px 60px;
    border-radius: 25px;
    border: ${({ theme, type }) =>
        type === 'TRANSPARENT' ? `1px solid ${theme.COLORS.GRAY_100}` : 'none'};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
