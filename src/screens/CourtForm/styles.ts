import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Content = styled.View`
    padding: 0 30px;
`

export const Title = styled.Text`
    margin-top:128;
    margin-bottom:8;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`

export const Description = styled.Text`
    margin-bottom: 20px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`

export const ButtonArea = styled.View`
    flex: 1;
    margin-top:224;
    width:fit-content;
    align-self: center;
`

export const ProgressContainer = styled.View`
    position: relative;
    margin-top: 30px;
    height: 2px;
`;

export const ProgressBar = styled.View`
    position: absolute; 
    width: 50%;
    top: 0;
    left: 0;
    right: 0;  
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    z-index: 2; 
`;

export const FullProgressBar = styled.View`
    position: absolute; 
    width: 100%;
    top: 0;
    left: 0;
    right: 0;  
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    z-index: 2; 
`;

export const RemainingProgress = styled.View`
    position: absolute; 
    top: 0;
    left: 0;
    right: 0;  
    height: 2px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_100};
    z-index: 1; 
`;