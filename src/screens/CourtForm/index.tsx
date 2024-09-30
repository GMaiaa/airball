import React, { useState } from 'react';
import { Input } from "@components/Input";
import { ButtonArea, Container, Content, Description, FullProgressBar, ProgressBar, ProgressContainer, RemainingProgress, Title } from "./styles";
import { Button } from "@components/Button";
import { View } from "react-native";
import { Label } from '@components/Label';
import StarRating from '@components/StarRating';

export function CourtForm() {
    const [formPage, setFormPage] = useState(1);
    const [lightRating, setLightRating] = useState(0);
    const [hoopRating, setHoopRating] = useState(0);

    function handleFormContinue() {
        setFormPage(prevPage => prevPage + 1);
        console.log(formPage)
    }


    return (
        <Container>
            <ProgressContainer>
                <RemainingProgress />
                {formPage === 1 && <ProgressBar />}
                {formPage === 2 && <FullProgressBar />}
            </ProgressContainer>
            <View>
                {formPage === 1 ? (
                    <Content>
                        <Title>Informações Gerais da Quadra</Title>
                        <Description>Aqui você irá preencher as principais informações<br /> da quadra</Description>
                        <Input label="Nome" placeholder="Quadra da Catitu" ></Input>
                        <Input label="Tipo da Quadra" placeholder="Tradicional" ></Input>
                        <Input label="Endereço" placeholder="Avenida Caititu, 500" ></Input>
                        <ButtonArea>
                            <Button title="Continuar" type="FILLED" onPress={handleFormContinue}></Button>
                        </ButtonArea>
                    </Content>
                ) : (
                    <></>
                )}
            </View>
            <View>
                {formPage === 2 ? (
                    <Content>
                        <Title>Informações Adicionais da Quadra</Title>
                        <Description>Aqui você irá preencher informações das condições e especificações da quadra</Description>
                        <Label text='Iluminação' />
                        <StarRating rating={1} onRate={(newRating: number) => setLightRating(newRating)} />
                        <Label text='Qualidade dos aros' />
                        <StarRating rating={1} onRate={(newRating: number) => setHoopRating(newRating)} />
                        <Title>{lightRating}</Title>
                        <Title>{hoopRating}</Title>
                    </Content>
                ) : (
                    <></>
                )}
            </View>
        </Container>
    )
}
