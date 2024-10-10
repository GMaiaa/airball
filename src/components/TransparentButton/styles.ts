// styles.ts
import { StyleSheet } from 'react-native';
import theme from '../../theme'; // Ajuste o caminho conforme necessário

export const styles = StyleSheet.create({
  buttonText: {
    color: theme.COLORS.GRAY_100, // Use a cor do tema
    fontSize: theme.FONT_SIZE.XXL, // Use o tamanho da fonte do tema
    fontFamily: theme.FONT_FAMILY.BOLD, // Use a família de fonte do tema
  },
  Content: {
    backgroundColor: '#121212',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 30,
    color: '#FFFFFF',
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
});
