import styled, { css } from "styled-components/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const HeaderNews = styled.View`
  flex-direction: row;
  align-items: center; 
  padding: 10px; 
`;

export const TitleHeader = styled.Text`
  flex: 1; 
  text-align: center; 
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const NotIcon = styled(Ionicons).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_100,
}))`
  right: 15px;
  position: absolute;
`;


export const LatestNews = styled.View`
margin-top: 35px;
margin-left: 15px;
flex: 1
`

export const TitleLatest = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}

  
`