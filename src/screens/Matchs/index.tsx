import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native'; // Importe ScrollView
import { Header } from "@components/Header";
import { HeaderMatchs, TitleHeader, Container, FilterButton, Line } from './styles';
import CardComponent from '@components/MatchCard';
import { Button } from '@components/Button';
import { useAuth } from '@hooks/useAuth';
import { api } from '@services/api';
import { AppError } from '@utils/AppError';
import { ListEmpty } from '@components/ListEmpty';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppRoutes } from '@routes/app.routes';
import { useNavigation } from '@react-navigation/native';



export default function Matchs() {
  const [myMatches, setMyMatches] = useState<any[]>([])
  const { user } = useAuth()
  const navigation = useNavigation<NativeStackNavigationProp<AppRoutes>>();


  async function handleOpenMatchDetails(matchId: string){
    navigation.navigate("MatchDetails", { matchId });
  }

  async function fetchMyMatches() {
    try {
      const response = await api.get(`/matches/getByPlayerId/${user.id}`)

      setMyMatches(response.data)
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError ? error.message : "Não foi possível pegar a loc.";
      console.log("ERRO: ", title)
    }
  }


  useEffect(() => {
    fetchMyMatches();
  }, []);

  return (
    <Container>
      <Header showHomeVersion />
      <HeaderMatchs>
        <TitleHeader>Suas Partidas</TitleHeader>
        <FilterButton>
          <Button type='OUTLINED' title='Filtrar' size='SMALL' />
        </FilterButton>
      </HeaderMatchs>
      <Line />

      <FlatList
        data={myMatches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardComponent
            title={`Team ${item.teams[0]?.players[0]?.player?.name} vs Team ${item.teams[1]?.players[0]?.player?.name || "B"}`}
            timestamp={new Date(item.date).toLocaleString()}
            location={item.court.address || "Endereço não disponível"}
            userCount={`${item.teams[0]?.players.length + item.teams[1]?.players.length} jogadores`}
            size="large"
            onPress={() => handleOpenMatchDetails(item.id)}
          />
        )}
        horizontal
        style={{ height: 180 }}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center', 
          alignItems: 'center', 
        }}
        ListEmptyComponent={() => (
          <ListEmpty message="Nenhum jogo popular no momento." />
        )}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  );
}
