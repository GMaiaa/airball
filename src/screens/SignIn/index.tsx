import { Highlight } from "@components/Highlight";
import { CommandsWrapper, Container, Form } from "./styles";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { Logo } from "@components/Logo";

export function SignIn() {
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
                <Input placeholder="Digite sua senha" label="Senha"/>
                <Input placeholder="Confirme sua senha" label="Confirmar Senha"/>
            </Form>
            <CommandsWrapper>
                <Button title="Continuar" type="TRANSPARENT" />


            </CommandsWrapper>
        </Container>
    )
}