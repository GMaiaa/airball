import { TouchableOpacityProps } from "react-native";
import { ButtonTypeStyleProps, Container, Title } from "./styles";

type ButtonSizeStyleProps = 'LARGE' | 'MEDIUM' | 'SMALL';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
  size?: ButtonSizeStyleProps;
};

export function Button({ title, type = 'FILLED', size = 'MEDIUM', ...rest }: Props) {
  return (
    <Container type={type} size={size} {...rest}>
      <Title size={size}>{title}</Title>
    </Container>
  );
}
