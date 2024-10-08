import styled, { css } from "styled-components/native";
import theme from '../../theme/index'; // Altere o caminho conforme a estrutura do seu projeto

export const Container = styled.View`
  flex: 1;
  width: '100%';
`;

export const NewCourt = styled.TouchableOpacity`
  position: absolute;
  bottom: 19px;
  left: 50%;
  margin-left: -35px;
  background-color: ${theme.COLORS.ORANGE};
  border-radius: 20px; 
  width: 80px;
  height: 60px; 
  align-items: center;
  justify-content: center;
`;

export const MarginRight = styled.View`
  margin-right: 50px;
`;

export const MarginLeft = styled.View`
  margin-left: 50px;
`;

export const screenOptions = {
  tabBarStyle: {
    height: 70,
    backgroundColor: theme.COLORS.GRAY_500,
  },
  tabBarActiveTintColor: theme.COLORS.ORANGE, 
  tabBarInactiveTintColor: theme.COLORS.GRAY_100, 
};


export const tabBarLabelStyle = {
    marginBottom: 8,
    fontSize: theme.FONT_SIZE.SM,
  };
