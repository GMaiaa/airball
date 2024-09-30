import React from "react";
import { useTheme } from "styled-components"; 
import { Container, LocIcon, LocText, LocWrapper, NotIcon, BackButton, ContentWrapper } from "./styles"; 
import { AntDesign } from "@expo/vector-icons"; // Usar AntDesign diretamente

type Props = {
  showHomeVersion?: boolean;
};

export function Header({ showHomeVersion = false }: Props) {
  const theme = useTheme();

  return (
    <Container>
      {showHomeVersion ? (
        <ContentWrapper>
          <LocWrapper>
            <LocIcon name="location" />
            <LocText> Av. Águia de Haia</LocText>
          </LocWrapper>
          <NotIcon name="notifications" />
        </ContentWrapper>
      ) : (
        <BackButton>
          <AntDesign name="left" size={24} color={theme.COLORS.GRAY_100} />
        </BackButton>
      )}
    </Container>
  );
}
