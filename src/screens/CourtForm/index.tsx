import React, { useState } from 'react';
import { Input } from "@components/Input";
import { ButtonArea, Container, Content, Description, FileInput, FullProgressBar, ProgressBar, ProgressContainer, RemainingProgress, Title } from "./styles";
import { Button } from "@components/Button";
import { View } from "react-native";
import { Label } from '@components/Label';
import StarRating from '@components/StarRating';
import { launchImageLibrary } from 'react-native-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';

export function CourtForm() {
    const [formPage, setFormPage] = useState(1);
    const [courtName, setCourtName] = useState('');
    const [courtType, setCourtType] = useState('');
    const [courtAddress, setCourtAddress] = useState('');
    const [lightRating, setLightRating] = useState(0);
    const [hoopRating, setHoopRating] = useState(0);
    const [courtImage, setCourtImage] = useState(null);

    function handleFormContinue() {
        if (formPage === 2) {
            handleSubmit();
        } else {
            setFormPage(prevPage => prevPage + 1);
        }
    }

    const selectImage = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) {
                console.log('Usuário cancelou a seleção de imagem');
            } else if (response.error) {
                console.log('Erro ao selecionar imagem:', response.error);
            } else {
                setCourtImage(response.assets[0]);
            }
        });
    };

    function handleSubmit() {
        const data = {
            name: courtName,
            type: courtType,
            address: courtAddress,
            light_rating: lightRating,
            hoop_rating: hoopRating,
        };
    }

    return (
        <Container>
            <ProgressContainer>
                <RemainingProgress />
                {formPage === 1 && <ProgressBar />}
                {formPage === 2 && <FullProgressBar />}
            </ProgressContainer>
            <View>
                {formPage === 1 && (
                    <Content>
                        <Title>Informações Gerais da Quadra</Title>
                        <Description>Aqui você irá preencher as principais informações<br /> da quadra</Description>
                        <Input
                            label="Nome"
                            placeholder="Quadra da Catitu"
                            value={courtName}
                            onChangeText={setCourtName}
                        />
                        <Input
                            label="Tipo da Quadra"
                            placeholder="Tradicional"
                            value={courtType}
                            onChangeText={setCourtType}
                        />
                        <Input
                            label="Endereço"
                            placeholder="Avenida Caititu, 500"
                            value={courtAddress}
                            onChangeText={setCourtAddress}
                        />
                        <ButtonArea>
                            <Button title="Continuar" type="FILLED" onPress={handleFormContinue} />
                        </ButtonArea>
                    </Content>
                )}
            </View>
            <View>
                {formPage === 2 && (
                    <Content>
                        <Title>Informações Adicionais da Quadra</Title>
                        <Description>Aqui você irá preencher informações das condições e especificações da quadra</Description>
                        <View style={{ marginTop: 10 }}>
                            <Label text='Iluminação' />
                            <StarRating rating={lightRating} onRate={setLightRating} />
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Label text='Qualidade dos aros' />
                            <StarRating rating={hoopRating} onRate={setHoopRating} />
                        </View>
                        <View style={{flex: 1, flexDirection: 'row'}}>
                            <FileInput onPress={selectImage}>Anexe uma imagem da quadra</FileInput>
                        </View>
                        <ButtonArea>
                            <Button title="Finalizar" type="FILLED" onPress={handleFormContinue} />
                        </ButtonArea>
                    </Content>
                )}
            </View>
        </Container>
    );
}