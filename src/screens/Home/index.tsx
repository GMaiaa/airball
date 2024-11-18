import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
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


export function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [courts, setCourts] = useState<CourtDTO[]>([])
  const navigation = useNavigation<NativeStackNavigationProp<AppRoutes>>();

  // const courts = [
  //   { title: "Quadra Tiquatira", distance: 0.8, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWy86PWXG52nr_k2ydflmVydZx56F0DrmwRg&s" },
  //   { title: "Quadra da Jacui", distance: 2.8, photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWy86PWXG52nr_k2ydflmVydZx56F0DrmwRg&s" },
  // ];

  let popularGames = [
    { title: "Sesc Consolação", timestamp: "2 hours", location: "São Paulo", userCount: "22" },
    { title: "Sesc Itaquera", timestamp: "15 Horas - Todos os dias", location: "Itaquera", userCount: "10" },
  ];

  async function fetchCourts() {
    try {
        setIsLoading(true)
        const response = await api.get(`/courts/getAll`)
        setCourts(response.data)


    } catch (error) {
        const isAppError = error instanceof AppError;
        const title = isAppError ? error.message : "Não foi possível carregar os exercícios"
        console.log("Erro:", title)
    } finally {
        setIsLoading(false)
    }
}

useEffect(() => {
  fetchCourts();
}, [])

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
                  distance={0.8}
                  photo={item.image} 
                  onPress={() => navigation.navigate('CourtGames')}
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
