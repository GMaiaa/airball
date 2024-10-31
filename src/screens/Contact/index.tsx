import { BackButton } from "@components/BackButton";
import { Container } from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppRoutes } from "@routes/app.routes";
import {useNavigation} from "@react-navigation/native"



export default function Contact() {

    const navigation = useNavigation<StackNavigationProp<AppRoutes>>(); // Corrigido aqui

    function handleBackButtonPress() {
      navigation.navigate("Menu");
    }

    return (
        <Container>
        <BackButton title="Opções de perfil" onPress={handleBackButtonPress} />

        </Container>

    )
}