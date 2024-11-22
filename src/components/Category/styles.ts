import styled, { css } from "styled-components/native";

type ContainerProps = {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    margin-right: 3px;
    min-width: 80px;
    height: 40px;
    background-color: transparent;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    ${({ isActive, theme }) => isActive && css`
        border: 1px solid ${theme.COLORS.GRAY_100};
    `}
`;

export const CategoryText = styled.Text<ContainerProps>`
    color: ${({ isActive, theme }) => isActive ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_200};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size: ${({theme}) => theme.FONT_SIZE.MD}px;
`;
