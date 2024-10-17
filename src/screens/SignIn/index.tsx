import { Highlight } from "@components/Highlight";
import { ButtonText, CommandsWrapper, Container, Form, RegisterText, TextLink, TextRow } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Logo } from "@components/Logo";
import { Text } from "react-native";

export function SignIn() {
    return (
        <Container>
            <Logo />
            <Highlight
                title="Bem vindo,"
                subtitle="Registre-se para continuar"
            />

            <Form>
                <Input placeholder="Digite seu email" label="Email" />
                <Input placeholder="Digite sua senha" label="Senha" />
            </Form>
            <CommandsWrapper>
                <Button
                    title="Continuar"
                    type="OUTLINED"
                    size="LARGE" 
                />

                <TextRow>
                    <RegisterText>
                        Já tem uma conta?
                    </RegisterText>
                    <ButtonText onPress={() => { }}>
                        <TextLink>
                            Entrar
                        </TextLink>
                    </ButtonText>
                </TextRow>
            </CommandsWrapper>
        </Container>
    )
}