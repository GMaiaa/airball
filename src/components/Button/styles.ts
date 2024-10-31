import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = 'FILLED' | 'OUTLINED';
export type ButtonSizeStyleProps = 'LARGE' | 'MEDIUM' | 'SMALL';

interface ContainerProps {
  type: ButtonTypeStyleProps;
  size: ButtonSizeStyleProps;
}

interface TitleProps {
  size: ButtonSizeStyleProps;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: ${({ theme, type }) =>
        type === 'FILLED' ? theme.COLORS.ORANGE : 'transparent'};

   border: ${({ theme, type }) =>
    type === 'OUTLINED' ? `1px solid ${theme.COLORS.GRAY_100}` : 'none'};

  ${({ size }) => size === 'LARGE' && css`
    height: 56px;
    padding: 0 24px;
  `}

  ${({ size }) => size === 'MEDIUM' && css`
    height: 48px;
    padding: 0 20px;
  `}

  ${({ size }) => size === 'SMALL' && css`
    height: 40px;
    padding: 0 16px;
  `}

`;

export const Title = styled.Text<TitleProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  ${({ size }) => size === 'LARGE' && css`
    font-size: 18px;
  `}

  ${({ size }) => size === 'MEDIUM' && css`
    font-size: 16px;
  `}

  ${({ size }) => size === 'SMALL' && css`
    font-size: 14px;
  `}
`;
