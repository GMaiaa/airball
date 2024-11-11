import styled, { css } from "styled-components/native";
import { Dimensions } from 'react-native';


export const Container = styled.View`
  flex: 1;
  background-color: #121212;
`;

export const BackButton = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Icon = styled.Text`
  font-size: 18px;
  color: #fff;
`;

export const CourtContainer = styled.View`
  position: relative;
  align-items: center;
  width:100%;
  height:600px;
`;

export const CourtImage = styled.Image`
  width: 92%;
  height: 90%;
`;

export const AddButton = styled.TouchableOpacity<{ top: string, left: string }>`
  position: absolute;
  width: 55px;
  height: 55px;
  background-color: #FF6F00;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
`;

export const AddText = styled.Text`
  color: #fff;
  font-size: 24px;
`;

export const PlayerOnCourt = styled.View<{ top: string, left: string }>`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  align-items: center;
`;

export const PlayerContainer = styled.View`
  align-items: center;
`;

export const PlayerImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 25px;
  border-color: #fff;
  border-width: 2px;
  margin-bottom:0px;
`;

export const PlayerName = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 4px;
`;

export const AddButtonBench = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #FF6F00;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-right:20px;
`;

export const BenchContainer = styled.ScrollView`
  flex-direction: row;
  margin-left:7%;
`;
export const TextDivision = styled.View`
  margin-left: 9%;
  margin-top: -10%;
  margin-bottom: 0px;
`;

export const BenchText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;


