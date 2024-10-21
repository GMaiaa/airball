import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Container, Content, CourtWrapper, HeaderWrapper, Icon, IconButton, Title, TitleSection } from './styles';
import { Header } from '@components/Header';
import { CourtCard } from '@components/CourtCard';
import { ListEmpty } from '@components/ListEmpty';
import CardComponent from '@components/MatchCard';


export function Home() {
  let courts = [
    { title: "Quadra da Tiquatira", distance: 0.8, photo: "https://www.jornaldevinhedo.com.br/wp-content/uploads/2019/09/16019_QuadraRep-1.jpg" },
    { title: "Quadra da Jacui", distance: 2.8, photo: "https://www.jornaldevinhedo.com.br/wp-content/uploads/2019/09/16019_QuadraRep-1.jpg" },
    { title: "Quadra da Jacui", distance: 2.8, photo: "https://www.jornaldevinhedo.com.br/wp-content/uploads/2019/09/16019_QuadraRep-1.jpg" }
    
  ];

  let popularGames = [
    { title: "Sesc Consolação", timestamp: "2 hours", location: "São Paulo", userCount: "22" },
    { title: "Sesc Itaquera", timestamp: "15 Horas - Todos os dias", location: "Itaquera", userCount: "10" },
  ];

  return (
    <Container>
      <Header showHomeVersion />
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
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <CourtCard title={item.title} distance={item.distance} photo={item.photo} />
            )}
            horizontal
            style={{height: 200 }}
            contentContainerStyle={{ paddingHorizontal: 10 }} // Adicionando padding horizontal
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
              <ListEmpty message="Nenhuma Quadra foi cadastrada até o momento." />
            )}
            showsHorizontalScrollIndicator={false}

          />
        </CourtWrapper>

      </Content>
    </Container>
  );
}
