import styled from 'styled-components/native';

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #121212;
  padding: 10px;
  margin: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;

export const IconsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const Icon = styled.Text`
  font-size: 18px;
  color: #fff;
`;
