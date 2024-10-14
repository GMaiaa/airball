import { Button } from "@components/Button";
import { Container, CourtHeader, ImageCourt, Title, Line, Description, LocationContainer,ButtonContainer,Content } from "./styles";
import CourtIllustration from "@assets/Court.png";
import { Header } from "@components/Header";
import TransparentButton from '@components/TransparentButton';
import Entypo from '@expo/vector-icons/Entypo';

export default function CourtDetails() {
    return (
        <Container>
            <Header />
            <Line />
            <CourtHeader>
                <ImageCourt source={CourtIllustration} />
                <Title> Quadra Parque Ibirapuera</Title>
                <LocationContainer>
                    <Entypo name="location" size={20} color="white" />
                    <Description>Avenida Tiquatira, 1665 - Arthur Alvim, São Paulo - SP</Description>
                </LocationContainer>
                <ButtonContainer>
                    <Button title="Ver no mapa" size="SMALL"/>
                </ButtonContainer>
            </CourtHeader>
            <Content>
            <TransparentButton title='Jogos' width={131} height={45} />
            <TransparentButton title='Frequência' width={131} height={45} />
            <TransparentButton title='Comentários' width={131} height={45} />
            </Content>
        </Container>
    )
}
