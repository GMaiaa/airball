import { useState } from "react";
import { ScrollView, TouchableOpacity, Text, View } from "react-native";
import { Button } from "@components/Button";
import { Container, CourtHeader, ImageCourt, Title, Line, Description, LocationContainer, ButtonContainer, Content, IconContainer,TabContainer } from "./styles";
import CourtIllustration from "@assets/Court.png";
import { Header } from "@components/Header";
import TransparentButton from '@components/TransparentButton';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import CardComponent from '@components/MatchCard';
import CreateGameScreen from "@screens/NewGame";


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
            <TouchableOpacity onPress={() => setSelectedTab("Jogos")}>
                <Text style={{ color: selectedTab === "Jogos" ? "#FFA500" : "white" }}>Jogos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab("Criar jogo")}>
                <Text style={{ color: selectedTab === "Criar jogo" ? "#FFA500" : "white" }}>Criar jogo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSelectedTab("Comentários")}>
                <Text style={{ color: selectedTab === "Comentários" ? "#FFA500" : "white" }}>Comentários</Text>
            </TouchableOpacity>
        </TabContainer>

            <Content>
                 {renderContent()}
            </Content>
        </Container>
    );
}
