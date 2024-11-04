import styled, {css} from "styled-components/native";
import Entypo from "@expo/vector-icons/Entypo";

export const Container = styled.View`
    width: 220px;
    height: 140px;
    margin-top: 16px;
    margin-right: 30px;
`

export const Photo = styled.Image`
    width: 100%;
    height: 125px;
    border-radius: 8px;
`

export const Infos = styled.View`
width: 100%;
justify-content: space-between;
flex-direction: row;
margin-top: 8px;
`

export const Title = styled.Text`
   ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`

export const LocationDistance = styled.View`
    flex-direction: row;
    align-items: center;
`

export const LocationText = styled.Text`
  ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: 10px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
    margin-right:3px;
`

export const LocIcon = styled(Entypo).attrs(({ theme }) => ({
    size: 14,
    color: theme.COLORS.GRAY_100,
  }))``;