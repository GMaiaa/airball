import { Button } from "@components/Button";
import { Container, Content, Description, ImageCourt, Title } from "./styles";
import CourtIllustration from "@assets/basketballCourt.png"
import { Header } from "@components/Header";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


export function CreateCourt() {
    const navigation = useNavigation<NativeStackNavigationProp<AppRoutes>>();
    type AppRoutes = {
        CourtForm: undefined;

    };


    return (
        <Container>
            <Header />
            <Content>
                <ImageCourt source={CourtIllustration} />
                <Title> Adicione uma nova quadra </Title>
                <Description> Fortaleça a comunidade: adicione quadras, organize partidas e eleve o basquete! </Description>
                <Button title="Adicionar Nova Quadra" type="FILLED" size="LARGE"  onPress={() => navigation.navigate('CourtForm')}/>
            </Content>
        </Container>
    )

}