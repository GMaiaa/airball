import styled, { css } from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface TabButtonProps {
  isActive?: boolean;
}


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;


export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px;
  flex:1;
`;

export const CourtHeader = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  position: relative;
  margin-bottom: 0;
`;

export const ImageCourt = styled.Image`
  width: 100%;
`;


export const Title = styled.Text`
  position: absolute;
  top: 20%;
  margin-left: -50%;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const MatchName = styled.Text`
  position: absolute;
  margin-left: 30%;
  top: 38%;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;


export const ProfileRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  position: absolute;
  top: 60%;
`;

export const ProfilePic = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 20px;
  margin-left: -10px;
`;

export const UserIcon = styled.View`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: 54px;
  height: 54px;
  background-color: white;
  padding: 3px;
`;


export const GhostText = styled.Text`
  color: black;
  font-size: 12px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;


export const Description = styled.Text`
  text-align: left;
  margin-left: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;


export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;
  left: 30%;
`;


export const IconContainer = styled.View`
  position: absolute;
  bottom: 170px;
  flex-direction: row;
  left: 85%;
  gap: 8px;
`;


export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
  align-self: center;
  margin-top: 0;
`;

export const TabContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  width: 90%;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  margin-top: 10px;
`;

// Botão de aba
export const TabButton = styled.TouchableOpacity<TabButtonProps>`
  padding: 8px 20px;
  border-radius: 20px;
  ${({ isActive, theme }) =>
    isActive
      ? css`
          background-color: ${theme.COLORS.GRAY_700};
          border: 2px solid ${theme.COLORS.GRAY_100};
        `
      : css`
          background-color: transparent;
          border: none;
        `}
`;

export const TabButtonText = styled.Text<TabButtonProps>`
  color: ${({ isActive, theme }) => (isActive ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_100)};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

// Detalhes do jogo
export const GameDetails = styled.View`
  padding: 16px;
  background-color: #1e1e1e;
  border-top-width: 1px;
  border-top-color: #333;
`;

export const DetailRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DetailIcon = styled(FontAwesome5).attrs({
  size: 24,
  color: "white",
})`
  margin-right: 30%; 
`;

export const DetailText = styled.Text`
  font-size: 16px;
  color: #ffffff;
`;

export const FormRow = styled.View`
  width: 100%;
  margin-bottom:20px;
`;


export const PlayButton = styled.TouchableOpacity`
  background-color: #FF6B00;
  padding: 10px 20px;
  border-radius: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  width:200px;
  height:50px;
  align-self:center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
  margin-right: 10px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0;
`;


export const InputLine = styled.View`
  border-bottom-width: 2px;
  border-color: white;
  width: 100%;
`;
