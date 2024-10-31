import { StyleSheet } from 'react-native';
import theme from '../../theme'; // Ajuste o caminho conforme necessário

export const styles = StyleSheet.create({
  buttonText: {
    color: theme.COLORS.GRAY_100, // Defina a cor do texto para um padrão visível
    fontSize: theme.FONT_SIZE.LG,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  Content: {
    backgroundColor: 'transparent', // Torna o fundo transparente
    borderWidth: 2.5, // Caso você queira manter uma borda
    borderColor: '#FFFFFF', // Define a cor da borda
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
