import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top:30px;
  margin-left:10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  margin-left: 5px; 
`;
