import { useEffect, useState } from "react";
import { FlatList, ScrollView } from "react-native";
import {
  Container,
  CourtHeader,
  ImageCourt,
  Title,
  Line,
  Description,
  LocationContainer,
  ButtonContainer,
  Content,
  IconContainer,
  TabContainer,
  TabButton,
  TabButtonText
} from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import CardComponent from '@components/MatchCard';
import CreateGameScreen from "@screens/NewGame";
import CommentsPage from "@screens/Comments";
import CourtIllustration from "@assets/Court.png";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { api } from "@services/api";
import { Loading } from "@components/Loading"; 
import { ListEmpty } from "@components/ListEmpty";
import { useNavigation } from "expo-router";
import { AppRoutes } from "@routes/app.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RouteParamsProps = {
  courtId: string;
}

export default function CourtGames() {
  const [selectedTab, setSelectedTab] = useState("Jogos");
  const [court, setCourt] = useState<any>(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [matches, setMatches] = useState<any[]>([]);

  const route = useRoute();
  const { courtId } = route.params as RouteParamsProps;
  const navigation = useNavigation<NativeStackNavigationProp<AppRoutes>>();


  async function fetchCourtDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/courts/getById/${courtId}`);
      setCourt(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar os detalhes da quadra.";
      console.log("Erro: ", title);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchMatchesOfCurrentCourt() {
    try {
      setIsLoading(true);
      const response = await api.get(`/matches/getByCourtId/${courtId}`);
      setMatches(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : "Não foi possível carregar as partidas da quadra.";
      console.log("Erro: ", title);
    } finally {
      setIsLoading(false);
    }
  }

   async function handleOpenMatchDetails(matchId: string){
    navigation.navigate("MatchDetails", { matchId });
  }

  const renderContent = () => {
    switch (selectedTab) {
      case "Jogos":
        return (
            <FlatList
              data={matches}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <CardComponent 
                  title={`Team ${item.teams[0]?.players[0]?.player?.name} vs Team ${item.teams[1]?.players[0]?.player?.name || "B"}`} 
                  timestamp={new Date(item.date).toLocaleString()} 
                  location={court?.address || "Endereço não disponível"} 
                  userCount={`${item.teams[0]?.players.length + item.teams[1]?.players.length} jogadores`} 
                  size="large"
                  onPress={() => handleOpenMatchDetails(item.id)}
                />
              )}
              horizontal
              style={{ height: 200 }}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              ListEmptyComponent={() => (
                <ListEmpty message="Nenhuma partida cadastrada para esta quadra." />
              )}
              showsHorizontalScrollIndicator={false}
            />
        );
      case "Criar jogo":
        return <CreateGameScreen id={courtId} />;
      case "Comentários":
        return <CommentsPage />;
      default:
        return null;
    }
  };

  useEffect(() => {
    fetchCourtDetails();
  }, [courtId]);

  useEffect(() => {
    fetchMatchesOfCurrentCourt();
  }, [courtId]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header />
      <Line />
      <CourtHeader>
        <ImageCourt
          source={CourtIllustration}
        />
        <Title>{court?.name || "Nome da Quadra"}</Title>
        <IconContainer>
          <AntDesign name="sharealt" size={24} color="white" />
          <AntDesign name="hearto" size={24} color="white" />
        </IconContainer>
        <LocationContainer>
          <Entypo name="location" size={20} color="white" />
          <Description>{court?.address || "Endereço não disponível"}</Description>
        </LocationContainer>
        <ButtonContainer>
          <Button title="Ver no mapa" size="SMALL" />
        </ButtonContainer>
      </CourtHeader>
      <TabContainer>
        <TabButton isActive={selectedTab === "Jogos"} onPress={() => setSelectedTab("Jogos")}>
          <TabButtonText isActive={selectedTab === "Jogos"}>Jogos</TabButtonText>
        </TabButton>
        <TabButton isActive={selectedTab === "Criar jogo"} onPress={() => setSelectedTab("Criar jogo")}>
          <TabButtonText isActive={selectedTab === "Criar jogo"}>Criar jogo</TabButtonText>
        </TabButton>
        <TabButton isActive={selectedTab === "Comentários"} onPress={() => setSelectedTab("Comentários")}>
          <TabButtonText isActive={selectedTab === "Comentários"}>Comentários</TabButtonText>
        </TabButton>
      </TabContainer>
      <Content>
        {renderContent()}
      </Content>
    </Container>
  );
}
