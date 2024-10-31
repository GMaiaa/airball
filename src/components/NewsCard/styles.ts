import styled, {css} from "styled-components/native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


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
    margin-top: 10px;
`

export const InfoBy = styled.View`
    flex-direction: row;
    align-items: center;
`

export const InfoByText = styled.Text`
  ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `};
`

export const NewsIcon = styled(MaterialIcons).attrs(({ theme }) => ({
    size: 14,
    color: theme.COLORS.GRAY_100,
  }))``;
  

  export const TimeReleased = styled.Text`
     ${({ theme }) => css`
        color: ${theme.COLORS.ORANGE};
        font-size: ${theme.FONT_SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
  `