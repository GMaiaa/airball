import { CenterImage, CommandCentral, Container, Content, HighlightText, Span } from "./styles";
import Illustration1V1 from "@assets/illustration1v1.png"
import { Button } from "@components/Button";
import { Logo } from "@components/Logo";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function Intro() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    function handleLogin(){
        navigation.navigate("signIn")
    }

    return (
        <Container>
           <Logo/>
            <Content>
                <CenterImage source={Illustration1V1} />

                <HighlightText>
                    Suba para a cesta, faça história: Transforme seu jogo com{' '}
                    <Span> AirBall</Span>
                </HighlightText>
            </Content>

            <CommandCentral>
                <Button title="Junte-se a nós" onPress={handleNewAccount}/>
                <Button title="Entrar" type='OUTLINED' onPress={handleLogin}/>
            </CommandCentral>
        </Container>
    )
}