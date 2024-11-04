import { useState } from "react";
import { ScrollView } from "react-native";
import { Container, CourtHeader, ImageCourt, Title, Line, Description, LocationContainer, ButtonContainer, Content, IconContainer, TabContainer, TabButton, TabButtonText } from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import CardComponent from '@components/MatchCard';
import CreateGameScreen from "@screens/NewGame";
import CommentsPage from "@screens/Comments";
import CourtIllustration from "@assets/Court.png";

export default function CourtGames() {
  const [selectedTab, setSelectedTab] = useState("Jogos");

  const renderContent = () => {
    switch (selectedTab) {
      case "Jogos":
        return (
          <ScrollView>
            <CardComponent title="Ibirapuera Tarde" timestamp="15 Horas - Todos os dias" location="Parque Ibirapuera" userCount="10" />
            <CardComponent title="Sesc Paulista" timestamp="15 Horas - Todos os dias" location="Avenida Paulista - Sesc Paulista" userCount="10" />
            <CardComponent title="Sesc Itaquera" timestamp="15 Horas - Todos os dias" location="Itaquera - Sesc Itaquera" userCount="10" />
          </ScrollView>
        );
      case "Criar jogo":
        return <CreateGameScreen />;
      case "Comentários":
        return <CommentsPage />;
      default:
        return null;
    }
  };

  return (
    <Container>
      <Header />
      <Line />
      <CourtHeader>
        <ImageCourt source={CourtIllustration} />
        <Title>Quadra Parque Ibirapuera</Title>
        <IconContainer>
          <AntDesign name="sharealt" size={24} color="white" />
          <AntDesign name="hearto" size={24} color="white" />
        </IconContainer>
        <LocationContainer>
          <Entypo name="location" size={20} color="white" />
          <Description>Avenida Tiquatira, 1665 - Arthur Alvim, São Paulo - SP</Description>
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
