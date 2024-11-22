import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { Container, CourtHeader, ImageCourt, Title, Line, Content, IconContainer, TabContainer, TabButton, TabButtonText, MatchName, ProfileRow, ProfilePic, UserIcon, GhostText, FormRow, Label, InputContainer, InputLine, GameDetails, DetailRow, DetailIcon, DetailText, PlayButton, ButtonText } from "./styles";
import { Header } from "@components/Header";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import AntDesign from "@expo/vector-icons/AntDesign";
import CourtIllustration from "@assets/Court.png";
import Teams from "@screens/Teams";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation, useRoute } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

type RouteParamsProps = {
  matchId: string;
}

export default function MatchDetails() {
  const [selectedTab, setSelectedTab] = useState("Jogo");
  const [isLoading, setIsLoading] = useState(true);
  const [match, setMatch] = useState<any>(null);
  const frequencia = "Semanal";
  const data = new Date().toLocaleDateString();
  const horario = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  const quadra = "Quadra Inteira";
  const nivel = "Amador";

  const route = useRoute();
  const { matchId } = route.params as RouteParamsProps;

  console.log(matchId)


  async function fetchMatchDetails() {
    try {
      setIsLoading(true);
      const response = await api.get(`/matches/${matchId}`);
      console.log(response.data)
      setMatch(response.data);
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

  const renderContent = () => {

    switch (selectedTab) {
      case "Jogo":
        return (
          <ScrollView>
            <Container>
              <Content>
                <FormRow>
                  <InputContainer>
                    <Label>Data</Label>
                    <DetailIcon name="calendar-alt" size={24} color="white" />
                    <DetailText>{match ? new Date(match.date).toLocaleString() : "Carregando..."}</DetailText>
                  </InputContainer>
                  <InputLine />
                </FormRow>
                <FormRow>
                  <InputContainer>
                    <Label>Quadra</Label>
                    <DetailIcon name="basketball-ball" size={24} color="white" />
                    <DetailText>{match ? match.court.type : "Carregando..."}</DetailText>
                  </InputContainer>
                  <InputLine />
                </FormRow>
                <FormRow>
                  <InputContainer>
                    <Label>Nível</Label>
                    <DetailIcon name="trophy" size={24} color="white" />
                    <DetailText>{nivel}</DetailText>
                  </InputContainer>
                  <InputLine />

                  <PlayButton onPress={() => setSelectedTab("Times")}>
                    <ButtonText>Jogar</ButtonText>
                    <Feather name="arrow-right" size={18} color="white" />
                  </PlayButton>


                </FormRow>
              </Content>
            </Container>
          </ScrollView>
        );
      case "Times":
        return (
          <Teams teams={match.teams}/>
        );
      default:
        return null;
    }
  };

  useEffect(() => {
    fetchMatchDetails();
  }, [matchId]);

  return (
    <Container>
      <Header />
      <Line />
      <CourtHeader>
        <ImageCourt source={CourtIllustration} />
        <Title>{match?.court?.name || "Carregando..."}</Title>
        <IconContainer>
          <AntDesign name="sharealt" size={24} color="white" />
          <AntDesign name="hearto" size={24} color="white" />
        </IconContainer>
        <MatchName>
          {match
            ? `Team ${match.teams[0]?.players[0]?.player?.name || "A"} vs Team ${match.teams[1]?.players[0]?.player?.name || "B"
            }`
            : "Carregando..."}
        </MatchName>
        <ProfileRow>
          <ProfilePic source={require("@assets/avatarDefault.png")} />
          <UserIcon>
            <FontAwesome5 name="user-alt" color="black" />
            <GhostText>
              {match ? match.teams[0]?.players.length + match.teams[1]?.players.length : "0"}
            </GhostText>
          </UserIcon>
        </ProfileRow>
      </CourtHeader>
      <TabContainer>
        <TabButton isActive={selectedTab === "Jogo"} onPress={() => setSelectedTab("Jogo")}>
          <TabButtonText isActive={selectedTab === "Jogo"}>Jogo</TabButtonText>
        </TabButton>
        <TabButton isActive={selectedTab === "Times"} onPress={() => setSelectedTab("Times")}>
          <TabButtonText isActive={selectedTab === "Times"}>Times</TabButtonText>
        </TabButton>
      </TabContainer>
      <Content>{renderContent()}</Content>
    </Container>
  );
}
