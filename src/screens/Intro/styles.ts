import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
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
