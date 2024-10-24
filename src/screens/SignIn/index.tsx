import { Highlight } from "@components/Highlight";
import { ButtonText, CommandsWrapper, Container, ForgotPassword, ForgotText, Form, RegisterText, TextLink, TextRow } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Logo } from "@components/Logo";
import { Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNewAccount(){
        navigation.navigate("signUp")
    }

    return (
        <Container>
            <Logo />
            <Highlight
                title="Bem vindo de volta,"
                subtitle="Entre para continuar"
            />

            <Form>
                <Input placeholder="Digite seu email" label="Email" />
                <Input placeholder="Digite sua senha" label="Senha" />
                <ForgotPassword onPress={() => { }}>
                    <ForgotText>
                        Esqueceu a senha?
                    </ForgotText>
                </ForgotPassword>
            </Form>
            <CommandsWrapper>
                <Button
                    title="Continuar"
                    type="OUTLINED"
                    size="LARGE"
                />

                <TextRow>
                    <RegisterText>
                        Não tem uma conta?
                    </RegisterText>
                    <ButtonText onPress={handleNewAccount}>
                        <TextLink>
                            Registrar
                        </TextLink>
                    </ButtonText>
                </TextRow>
            </CommandsWrapper>
        </Container>
    )
}