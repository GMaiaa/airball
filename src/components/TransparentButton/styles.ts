import { StyleSheet } from 'react-native';
import theme from '../../theme'; // Ajuste o caminho conforme necessário

export const styles = StyleSheet.create({
  buttonText: {
    color: '#FFFFFF',
    fontSize: theme.FONT_SIZE.LG,
    fontFamily: theme.FONT_FAMILY.SEMIBOLD,
  },
  Content: {
    backgroundColor: '#121212',
    borderWidth: 2.5,
    borderColor: '#FFFFFF',
    borderRadius: 20,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});
