import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const Content = styled.View`
flex-direction:row;
`;

export const CourtHeader = styled.View`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  bottom: 50px;
  position: relative;
`;

export const ImageCourt = styled.Image`
  margin-top: 15px;
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
  position:absolute;
  flex-direction: row;  /* Coloca o ícone e o texto na mesma linha */
  justify-content: flex-start;  /* Garante que o conteúdo fique alinhado à esquerda */
  margin-top: 10px;
  width: 90%;  /* Define uma largura para o contêiner */
`;

export const Description = styled.Text`
  text-align: left;
  margin-left: 8px; /* Espaço entre o ícone e o texto */
  
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;


export const ButtonContainer = styled.View`
  position: absolute;
  bottom: 20px;  /* Ajusta o valor conforme necessário para posicionar o botão */
  left: 35%;
`;




export const Line = styled.View`
  height: 1px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  margin-top: 10px;
  width: 100%;
  align-self: center;
  margin-bottom: 38px;
`;
