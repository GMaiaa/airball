import styled, {css} from "styled-components/native";

import AntDesign from "@expo/vector-icons/AntDesign"
import Entypo from "@expo/vector-icons/Entypo"
import Ionicons from '@expo/vector-icons/Ionicons';


export const Container = styled.View`

padding: 20px 20px;

flex-direction: row;
align-items: center;
justify-content: space-between;
`
export const LocWrapper = styled.View`
    flex-direction: row;
`

export const LocText = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.SEMIBOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
    `}
`

export const LocIcon = styled(Entypo).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_100,
}))`


`

export const NotIcon = styled(Ionicons).attrs(({theme}) => ({
    size: 24,
    color: theme.COLORS.GRAY_100,
}))`


`