import styled, { css } from "styled-components/native";
import theme from '../../theme/index'; // Altere o caminho conforme a estrutura do seu projeto


export const NewCourt = styled.View`
  background-color: ${theme.COLORS.ORANGE};
  border-radius: 20px; 
  width: 80px;
  height: 60px; 
  align-items: center;
  justify-content: center;
  bottom: 20px;
`;