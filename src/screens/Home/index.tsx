import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Container, Content, CourtWrapper, HeaderWrapper, Icon, IconButton, Title, TitleSection } from './styles';
import { Header } from '@components/Header';
import { CourtCard } from '@components/CourtCard';
import { ListEmpty } from '@components/ListEmpty';
import CardComponent from '@components/MatchCard';
import { AppRoutes } from "@routes/app.routes";
import { CourtDTO } from '@dtos/CourtDTO';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import * as Location from 'expo-location';

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Raio da Terra em km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
}

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [courts, setCourts] = useState<CourtDTO[]>([]);
  const [currentLocation, setCurrentLocation] = useState({ latitude: 0, longitude: 0 });
  const navigation = useNavigation<NativeStackNavigationProp<AppRoutes>>();

  const popularGames = [
    { title: "Sesc Consolação", timestamp: "2 hours", location: "São Paulo", userCount: "22" },
    { title: "Sesc Itaquera", timestamp: "15 Horas - Todos os dias", location: "Itaquera", userCount: "10" },
  ];

  async function fetchCourts() {
    try {
      setIsLoading(true);
      const response = await api.get(`/courts/getAll`);
      const courtsWithDistance = response.data.map((court: CourtDTO) => {
        const distance = calculateDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          court.latitude,
          court.longitude
        );
        return { ...court, distance };
      });
      setCourts(courtsWithDistance);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível carregar as quadras.";
      Alert.alert("Erro", title);
    } finally {
      setIsLoading(false);
    }
  }

  function handleOpenCourtDetails(courtId: string){
    navigation.navigate("CourtGames", {courtId});
  }

  async function getUserLocation() {
    try {
      // Solicitar permissões
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Permissão negada',
          'Precisamos da sua permissão para acessar a localização.'
        );
        return;
      }

      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;
      console.log({ latitude, longitude })
      setCurrentLocation({ latitude, longitude });
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível pegar a loc.";
      console.log("ERRO: ", title)
    }
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  useEffect(() => {
      fetchCourts();
  }, [currentLocation]);

  return (
    <Container>
      <Header showHomeVersion />
      <ScrollView>
        <Content>
          <Title> Bem-vindo ao AirBall! Pronto para dominar a quadra? </Title>
          
          <CourtWrapper>
            <HeaderWrapper>
              <TitleSection> Quadras </TitleSection>
              <View style={{ gap: 4, flexDirection: "row" }}>
                <IconButton><Icon name='map' /></IconButton>
                <IconButton><Icon name='menu' /></IconButton>
              </View>
            </HeaderWrapper>

            <FlatList
              data={courts}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <CourtCard 
                  title={item.name} 
                  distance={Number(item.distance.toFixed(1))} 
                  photo={item.image} 
                  onPress={() => handleOpenCourtDetails(item.id)}
                />
              )}
              horizontal
              style={{ height: 200 }}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              ListEmptyComponent={() => (
                <ListEmpty message="Nenhuma Quadra foi cadastrada até o momento." />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </CourtWrapper>

          <CourtWrapper>
            <HeaderWrapper>
              <TitleSection> Jogos Populares </TitleSection>
            </HeaderWrapper>
            
            <FlatList
              data={popularGames}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <CardComponent 
                  title={item.title} 
                  timestamp={item.timestamp} 
                  location={item.location} 
                  userCount={item.userCount} 
                  size="small"
                />
              )}
              horizontal
              style={{ height: 180 }}
              ListEmptyComponent={() => (
                <ListEmpty message="Nenhum jogo popular no momento." />
              )}
              showsHorizontalScrollIndicator={false}
            />
          </CourtWrapper>
        </Content>
      </ScrollView>
    </Container>
  );
}
