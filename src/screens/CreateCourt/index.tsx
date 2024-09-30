import { Button } from "@components/Button";
import { Container, Content, Description, ImageCourt, Title } from "./styles";
import CourtIllustration from "@assets/basketballCourt.png"
import { Header } from "@components/Header";

export function CreateCourt() {
    return (
        <Container>
            <Header />
            <Content>
                <ImageCourt source={CourtIllustration} />
                <Title> Adicione uma nova quadra </Title>
                <Description> Fortaleça a comunidade: adicione quadras, organize partidas e eleve o basquete! </Description>

                <Button title="Adicionar uma nova quadra +" />
            </Content>
        </Container>
    )

}