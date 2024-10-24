import styled, { css } from "styled-components/native";
import { Picker } from '@react-native-picker/picker';


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
`;

export const CourtHeader = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
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

export const LocationContainer = styled.View`
  position: absolute;
  flex-direction: row;
  margin-top: 10px;
  width: 90%;
`;

export const Description = styled.Text`
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
  left: 35%;
`;

export const IconContainer = styled.View`
  position: absolute;
  bottom: 170px;
  flex-direction: row;
  left: 85%;
  gap: 8px;
  z-index: 1;
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  width: 100%;
`;

export const FormRow = styled.View`
  margin-bottom: 20px;
  width: 90%;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-right: 10px; /* Espaçamento à direita do label para separar do Picker */
`;

export const InputContainer = styled.View`
  flex-direction: row; 
  align-items: center; 
  width: 100%; 
  justify-content: space-between;
`;

export const InputText = styled.TextInput`
  background-color: transparent; /* Fundo transparente */
  padding: 10px;
  border-radius: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px; /* Fonte XS (12px) */
    color: ${theme.COLORS.GRAY_100}; /* Cor do texto */
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const InputLine = styled.View`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: white;
  width: 100%;
`;

