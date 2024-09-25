import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const LogoWrapper = styled.View`
    position: absolute;
    top: 10px;
    left: 10px;
`
export const Logo = styled.Image`
    width: 50px;
    height: 50px;
    margin-left: 29px;
    margin-top: 60px;
`

export const Content = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const CenterImage = styled.Image`
    width: 310px;
    height: 310px;
`

export const HighlightText = styled.Text`
    width: 350px;
    height: 124px;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.XL}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`


export const Span = styled.Text`
    color: ${({ theme }) => theme.COLORS.ORANGE};
`

export const CommandCentral = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35px;
`