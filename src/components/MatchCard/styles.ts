import styled, { css } from 'styled-components/native';


/*
  O código utiliza duas opções de tamanho: 'small' e 'large'.
  A opção 'small' reduz as dimensões do cartão, imagens e textos para apresentar um layout mais compacto, 
  enquanto a opção 'large' utiliza dimensões maiores para um layout mais espaçoso e legível.
*/


interface CardProps {
  size?: 'large' | 'small';
  width?: number;
}

interface SizeProps {
  size?: 'large' | 'small';
}

export const Card = styled.View<CardProps>`
  background-color: #273b4a;
  border-radius: 10px;
  margin: 10px;
  padding: ${({ size }) => (size === 'small' ? '15px' : '20px')};
  height: ${({ size }) => (size === 'small' ? '140px' : '240px')};
  width: ${({ width, size }) => (width ? `${width}px` : size === 'small' ? '220px' : '350px')};
`;


export const Title = styled.Text<SizeProps>`
  color: #fff;
  ${({ theme, size }) => css`
    font-size: ${size === 'small' ? '14px' : `${theme.FONT_SIZE.LG}px`};
    font-family: ${theme.FONT_FAMILY.SEMIBOLD};
    margin-bottom: 10px;
  `}
`;

export const ProfileRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
  margin-left: 11px;
`;

export const ProfilePic = styled.Image<SizeProps>`
  width: ${({ size }) => (size === 'small' ? '40px' : '54px')};
  height: ${({ size }) => (size === 'small' ? '40px' : '54px')};
  border-radius: 20px;
  margin-left: -10px;
`;


export const UserIcon = styled.View<SizeProps>`
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: ${({ size }) => (size === 'small' ? '40px' : '54px')};
  height: ${({ size }) => (size === 'small' ? '40px' : '54px')};
  background-color: white;
  padding: 3px;
`;


export const GhostText = styled.Text<SizeProps>`
  color: black;
  font-size: ${({ size }) => (size === 'small' ? '10px' : '12px')};
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;


export const Timestamp = styled.Text`
  color: #fff;
  margin-bottom: 20px;
  margin-top: 30px;
  font-size: 14px;
`;

export const Location = styled.Text`
  color: #fff;
  margin-left: 10px;
`;

export const LocationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const PlayButton = styled.TouchableOpacity<SizeProps>`
  position: absolute;
  background-color: black;
  border-radius: 10px;
  width: ${({ size }) => (size === 'small' ? '60px' : '80px')};
  height: ${({ size }) => (size === 'small' ? '35px' : '45px')};
  justify-content: center;
  align-items: center;
  flex-direction: row;
  right: ${({ size }) => (size === 'small' ? '12px' : '28px')};
  bottom: ${({ size }) => (size === 'small' ? '10px' : '45px')};
`;

export const PlayText = styled.Text<SizeProps>`
  color: #fff;
  font-size: ${({ size }) => (size === 'small' ? '10px' : '12px')};
`;
