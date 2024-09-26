import { Input } from "@components/Input";
import { ButtonArea, Container, Content, Description, ProgressBar, ProgressContainer, RemainingProgress, Title } from "./styles";
import { Button } from "@components/Button";

export function CourtForm() {
    return (
        <Container>
            <ProgressContainer>
                <RemainingProgress />
                <ProgressBar />
            </ProgressContainer>
            <Content>
                <Title>Informações Gerais da Quadra</Title>
                <Description>Aqui você irá preencher as principais informações<br /> da quadra</Description>
                <Input label="Nome" placeholder="Quadra da Catitu" ></Input>
                <Input label="Tipo da Quadra" placeholder="Tradicional" ></Input>
                <Input label="Endereço" placeholder="Avenida Caititu, 500" ></Input>
                <ButtonArea>
                    <Button title="Continuar" type="FILLED"></Button>
                </ButtonArea>
            </Content>
        </Container>
    )
}
