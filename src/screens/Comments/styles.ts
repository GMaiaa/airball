import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
`;


export const CommentContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin:20px;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin-right: 12px;
`;

export const TextContainer = styled.View`
  flex: 1;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: bold;
`;

export const CommentText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_500};
  padding-top: 8px;
  margin: 16px;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 4px;
  padding: 8px;
  margin-right: 8px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 8px 16px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-weight: bold;
`;
