import React, { useState } from 'react';
import { Input } from "@components/Input";
import { BackIcon, ButtonArea, Container, Content, Description, FileInput, FormHeader, FullProgressBar, Placeholder, ProgressBar, ProgressBarContainer, ProgressContainer, RemainingProgress, Title } from "./styles";
import { Button } from "@components/Button";
import { View, Text, Image, ScrollView } from "react-native"; // Import ScrollView
import { Label } from '@components/Label';
import StarRating from '@components/StarRating';
import * as ImagePicker from 'expo-image-picker';
import { api } from '@services/api';

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { AppError } from '@utils/AppError';
import { AppRoutes } from '@routes/app.routes';


export function CourtForm() {
    const [formPage, setFormPage] = useState(1);
    const [courtName, setCourtName] = useState('');
    const [courtType, setCourtType] = useState('');
    const [courtAddress, setCourtAddress] = useState('');
    const [lightRating, setLightRating] = useState(0);
    const [hoopRating, setHoopRating] = useState(0);
    const [courtImage, setCourtImage] = useState<ImagePicker.ImagePickerAsset | null>(null);

    const navigation = useNavigation<StackNavigationProp<AppRoutes>>();

    function handleFormContinue() {
        if (formPage === 1 && (!courtName || !courtType || !courtAddress)) {
            alert("Preencha todos os campos antes de prosseguir");
            return;
        }
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
    
        if (!result.canceled && result.assets && result.assets.length > 0) {
            setCourtImage(result.assets[0]);
        }
    };

   async function handleSubmit() {
        try {
            const data = {
                name: courtName,
                type: courtType,
                address: courtAddress,
                lighting_quality: lightRating,
                hoop_quality: hoopRating,
                usage_freuency: 5,
                image: courtImage,
            };
            console.log(data)

           await api.post("/courts/create", data)
           navigation.navigate("Home")
        
        } catch (error) {
            console.log(error)
            const isAppError = error instanceof AppError;

            const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde';

            console.log("ERROR: ", title)
        }
       
    }

    return (
        <Container>
            <ProgressContainer>
                <BackIcon
                    name="arrow-back"
                    onPress={() => setFormPage(prevPage => prevPage - 1)}
                />
                <ProgressBarContainer>
                    <RemainingProgress />
                    {formPage === 1 && <ProgressBar />}
                    {formPage === 2 && <FullProgressBar />}
                </ProgressBarContainer>
            </ProgressContainer>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
                                <Button title="Continuar" size="LARGE" type="FILLED" onPress={handleFormContinue} />
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
                                    {courtImage ? (
                                        <Image source={{ uri: courtImage.uri }} style={{ width: '100%', height: '100%' }} />
                                    ) : (
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
            </ScrollView>
        </Container>
    );
}
