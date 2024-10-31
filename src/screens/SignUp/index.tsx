import { Highlight } from "@components/Highlight";
import { ButtonText, CommandsWrapper, Container, Form, RegisterText, TextLink, TextRow } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Logo } from "@components/Logo";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignUp() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleLogin(){
        navigation.navigate("signIn")
    }
    
    return (
        <Container>
            <Logo />
            <Highlight
                title="Bem vindo,"
                subtitle="Registre-se para continuar"
            />

            <Form>
                <Input placeholder="Digite seu nome completo" label="Nome" />
                <Input placeholder="Digite seu email" label="Email" />
                <Input placeholder="Digite sua senha" label="Senha" />
                <Input placeholder="Confirme sua Senha" label="Confirme a senha" />
            </Form>
            <CommandsWrapper>
                <Button
                    title="Crie sua Conta"
                    type="FILLED"
                    size="LARGE"
                />

                <TextRow>
                    <RegisterText>
                        Já tem uma conta?
                    </RegisterText>
                    <ButtonText onPress={handleLogin}>
                        <TextLink>
                            Entrar
                        </TextLink>
                    </ButtonText>
                </TextRow>
            </CommandsWrapper>
        </Container>
    )
}