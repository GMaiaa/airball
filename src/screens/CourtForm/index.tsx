import React, { useState } from 'react';
import { Input } from "@components/Input";
import { ButtonArea, Container, Content, Description, FileInput, FullProgressBar, Placeholder, ProgressBar, ProgressContainer, RemainingProgress, Title } from "./styles";
import { Button } from "@components/Button";
import { View, Text, Image } from "react-native";
import { Label } from '@components/Label';
import StarRating from '@components/StarRating';
import * as ImagePicker from 'expo-image-picker';

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

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setCourtImage(result.assets[0]);
        }
    };

    function handleSubmit() {
        const data = {
            name: courtName,
            type: courtType,
            address: courtAddress,
            light_rating: lightRating,
            hoop_rating: hoopRating,
            image: courtImage,
        };
        console.log(data);
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
                        <Description>
                            Aqui você irá preencher as principais informações da quadra
                        </Description>
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
                            <Button title="Large Button" size="LARGE" type="FILLED" />
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
                        <View style={{ marginTop: 20 }}>
                            <FileInput onPress={selectImage}>
                                {courtImage ? (<Image source={{ uri: courtImage.uri }} style={{ width: '100%', height: '100%' }} />) : (
                                    <Placeholder>Anexe uma imagem da quadra</Placeholder>
                                )}
                            </FileInput>
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
