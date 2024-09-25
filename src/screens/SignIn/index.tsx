import { Highlight } from "@components/Highlight";
import { CommandsWrapper, Container } from "./styles";
import { Button } from "@components/Button";

export function SignIn(){
    return(
        <Container>
            <Highlight 
            title="Bem vindo,"
            subtitle="Registre-se para continuar"
            />
            <CommandsWrapper>
                <Button title="Continuar" type="TRANSPARENT"/>
                
            </CommandsWrapper>
        </Container>
    )
}