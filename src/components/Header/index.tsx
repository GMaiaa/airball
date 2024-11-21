import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";
import { useTheme } from "styled-components";
import {
  Container,
  LocIcon,
  LocText,
  LocWrapper,
  NotIcon,
  BackButton,
  ContentWrapper,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type AppRoutes = {
  TabBar: undefined;
  CourtGames: undefined;
};

type Props = {
  showHomeVersion?: boolean;
};

export function Header({ showHomeVersion = false }: Props) {
  const theme = useTheme();
  const navigation = useNavigation<NavigationProp<AppRoutes>>();

  const [location, setLocation] = useState<string>("Buscando localização...");

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Permissão negada",
            "Habilite a permissão de localização para usar este recurso."
          );
          return;
        }

        const currentLocation = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = currentLocation.coords;

        const reverseGeocode = await Location.reverseGeocodeAsync({
          latitude,
          longitude,
        });

        if (reverseGeocode.length > 0) {
          const { street, name } = reverseGeocode[0];
          setLocation(`${street || name}`);
        } else {
          setLocation("Localização não encontrada");
        }
      } catch (error) {
        console.error(error);
        setLocation("Erro ao buscar localização");
      }
    })();
  }, []);

  return (
    <Container>
      {showHomeVersion ? (
        <ContentWrapper>
          <LocWrapper>
            <LocIcon name="location" />
            <LocText>{location}</LocText>
          </LocWrapper>
          <NotIcon name="notifications" />
        </ContentWrapper>
      ) : (
        <BackButton onPress={() => navigation.navigate("TabBar")}>
          <AntDesign name="left" size={24} color={theme.COLORS.GRAY_100} />
        </BackButton>
      )}
    </Container>
  );
}
