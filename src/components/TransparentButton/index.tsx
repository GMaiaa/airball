import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles"; // Importando os estilos

type ButtonSizeStyleProps = 'LARGE' | 'MEDIUM' | 'SMALL';

type TransparentButtonProps = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps; // Tipo do botão
  size?: ButtonSizeStyleProps; // Tamanho do botão
};

export function TransparentButton({ title, type = 'OUTLINED', size = 'MEDIUM', ...rest }: TransparentButtonProps) {
  return (
    <Container type={type} size={size} style={{ backgroundColor: 'transparent' }} {...rest}>
      <Title size={size} style={{ color: rest.disabled ? 'lightgray' : 'orange' }}>{title}</Title>
    </Container>
  );
}