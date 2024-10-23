// styles.ts
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const OptionContainer = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left:30px;
  margin-right:30px;
  margin-bottom:30px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;

export const OptionTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const OptionSubtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;