import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Content = styled.View`
    padding: 0 48px;
    height: 100vh;
`

export const Title = styled.Text`
    margin-top: 128px;
    margin-bottom: 8px;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`

export const Description = styled.Text`
    margin-bottom: 30px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
`

export const ButtonArea = styled.View`
    position: absolute;
    top: 590px;
    width:80%;
    align-self: center;
    margin-top: 100px;
`

export const FileInput = styled.Pressable`
    background-color: transparent;
    margin-top: 10px;
    align-items: center;
    width: 100%;
    min-height: 150px;
    max-height: 200px;
    justifyContent: center;
    alignItems: center;
    border: 2px dotted ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    color: #000;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    text-align: center;
    justify-content: center;
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

export const Placeholder = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
    fontSize: 16px;
`