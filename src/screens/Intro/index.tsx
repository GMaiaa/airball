import { CenterImage, CommandCentral, Container, Content, HighlightText, Logo, LogoWrapper, Span } from "./styles";
import LogoImg from "@assets/logo.png"
import Illustration1V1 from "@assets/illustration1v1.png"
import { Button } from "@components/Button";

export function Intro() {
    return (
        <Container>
            <LogoWrapper>
                <Logo source={LogoImg} />
            </LogoWrapper>

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