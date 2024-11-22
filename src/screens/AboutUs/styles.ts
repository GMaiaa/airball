import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-weight: bold;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Paragraph = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  line-height: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  text-align:justify;
`;
