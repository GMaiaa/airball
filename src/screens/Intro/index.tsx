import { CenterImage, CommandCentral, Container, Content, HighlightText, Span } from "./styles";
import Illustration1V1 from "@assets/illustration1v1.png"
import { Button } from "@components/Button";
import { Logo } from "@components/Logo";

export function Intro() {
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
                <Button title="Junte-se a nós"/>
                <Button title="Entrar" type='TRANSPARENT'/>
            </CommandCentral>
        </Container>
    )
}