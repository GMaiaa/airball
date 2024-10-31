import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Title } from "./styles"; // Ajuste conforme seu arquivo de estilos
import { Feather } from "@expo/vector-icons"; // Importando ícone da Feather

type Props = TouchableOpacityProps & {
  title: string;
  onPress?: () => void;

};

export function BackButton({ title, onPress ,...rest }: Props) {
  return (
    <Container {...rest} onPress={onPress}>
      <Feather name="chevron-left" size={30} color="gray" />
      <Title>{title}</Title>
    </Container>
  );
}
