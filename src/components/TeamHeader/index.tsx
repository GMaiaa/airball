import React from 'react';
import { TouchableOpacity } from 'react-native';
import { HeaderContainer, Title, IconsContainer, Icon,BackButton } from './styles';
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "styled-components"; 


export function TeamHeader({ title }: { title: string }) {
const theme = useTheme();
  return (
    <HeaderContainer>
        <TouchableOpacity>
        <AntDesign name="left" size={24} color={theme.COLORS.GRAY_100} />
        </TouchableOpacity>
      <Title>{title}</Title>
      <IconsContainer>
        <TouchableOpacity>
        <AntDesign name="sharealt" size={24} color={theme.COLORS.GRAY_100} />
        </TouchableOpacity>
        <TouchableOpacity>
        <AntDesign name="setting" size={24} color={theme.COLORS.GRAY_100}/>
        </TouchableOpacity>
      </IconsContainer>
    </HeaderContainer>
  );
}
