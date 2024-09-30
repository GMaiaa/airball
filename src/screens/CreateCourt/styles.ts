import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Content = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 400px;
`

export const ImageCourt = styled.Image`
  margin-top: 100px;
`

export const Title = styled.Text`
  margin-top: 100px;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG}px;
    `}
`

export const Description = styled.Text`
text-align: center;
margin-top: 15px;
margin-bottom: 65px;
  ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`