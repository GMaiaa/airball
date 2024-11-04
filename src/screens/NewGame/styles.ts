import styled, { css } from "styled-components/native";

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

export const FormRow = styled.View`
  margin-bottom: 20px;
  width: 98%;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  margin-right: 10px;
`;

export const InputContainer = styled.View`
  flex-direction: row; 
  align-items: center; 
  width: 100%; 
  justify-content: space-between;
`;

export const InputText = styled.TextInput`
  background-color: transparent;
  padding: 10px;
  border-radius: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const InputLine = styled.View`
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: white;
  width: 100%;
`;
