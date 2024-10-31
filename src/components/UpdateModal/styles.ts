import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalContent = styled.View`
  width: 80%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 10px;
  padding: 20px;
  position: relative;
`;

export const CloseButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.FONT_SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `};
  margin-top:10px;
  margin-bottom: 20px;
  text-align: center;
`;
