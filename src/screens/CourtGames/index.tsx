import { Button } from "@components/Button";
import { Container, CourtHeader, ImageCourt, Title, Line, Description, LocationContainer,ButtonContainer,Content,IconContainer } from "./styles";
import CourtIllustration from "@assets/Court.png";
import { Header } from "@components/Header";
import TransparentButton from '@components/TransparentButton';
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import CardComponent from '@components/MatchCard';
import { ScrollView } from "react-native";


export default function CourtGames() {
    return (
        <Container>
            <Header />
            <Line />
            <CourtHeader>
                <ImageCourt source={CourtIllustration} />
                <Title> Quadra Parque Ibirapuera</Title>
                <IconContainer>
                    <AntDesign name="sharealt" size={24} color="white" />
                    <AntDesign name="hearto" size={24} color="white" />
                </IconContainer>
                <LocationContainer>
                    <Entypo name="location" size={20} color="white" />
                    <Description>Avenida Tiquatira, 1665 - Arthur Alvim, São Paulo - SP</Description>
                </LocationContainer>
                <ButtonContainer>
                    <Button title="Ver no mapa" size="SMALL"/>
                </ButtonContainer>
            </CourtHeader>
        <Content>
            <ScrollView>
                <CardComponent 
                title="Ibirapuera Tarde" 
                timestamp="15 Horas - Todos os dias" 
                location="Parque Ibirapuera" 
                userCount="10" 
                />
                <CardComponent 
                title="Sesc Paulista" 
                timestamp="15 Horas - Todos os dias" 
                location="Avenida Paulista - Sesc Paulista" 
                userCount="10" 
                />
                <CardComponent 
                title="Sesc Itaquera" 
                timestamp="15 Horas - Todos os dias" 
                location="Itaquera - Sesc Itaquera" 
                userCount="10" 
                />
                <CardComponent 
                title="Sesc Itaquera" 
                timestamp="15 Horas - Todos os dias" 
                location="Itaquera - Sesc Itaquera" 
                userCount="10" 
                />
            </ScrollView>
        </Content>
        </Container>
    )
}