import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Button } from "@components/Button";
import {
    Container,
    CourtHeader,
    ImageCourt,
    Title,
    Line,
    Description,
    LocationContainer,
    ButtonContainer,
    Content,
    IconContainer,
    FormRow,
    Label,
    InputContainer,
    InputLine
} from "./styles";
import CourtIllustration from "@assets/Court.png";
import { Header } from "@components/Header";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

export default function NewGame() {
    const [frequencia, setFrequencia] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [quadra, setQuadra] = useState('');
    const [nivel, setNivel] = useState('');

    return (
        <Container>
            <Header />
            <Line />
            <CourtHeader>
                <ImageCourt source={CourtIllustration} />
                <Title>Quadra Parque Ibirapuera</Title>
                <IconContainer>
                    <AntDesign name="sharealt" size={24} color="white" />
                    <AntDesign name="hearto" size={24} color="white" />
                </IconContainer>
                <LocationContainer>
                    <Entypo name="location" size={20} color="white" />
                    <Description>Avenida Tiquatira, 1665 - Arthur Alvim, São Paulo - SP</Description>
                </LocationContainer>
                <ButtonContainer>
                    <Button title="Ver no mapa" size="SMALL" />
                </ButtonContainer>
            </CourtHeader>

            <Content>

                <FormRow>
                <InputLine />
                    <InputContainer>
                        <Label>Frequência</Label>
                        <View style={{ flex: 1 }}>
                            <Picker
                                selectedValue={frequencia}
                                onValueChange={setFrequencia}
                                style={{ color: 'white' }}
                            >
                                <Picker.Item label="Escolha a Frequência de jogos" value="" />
                                <Picker.Item label="Semanal" value="semanal" />
                                <Picker.Item label="Mensal" value="mensal" />
                            </Picker>
                        </View>
                    </InputContainer>
                    <InputLine />
                </FormRow>

                <FormRow>
                    <InputContainer>
                        <Label>Data</Label>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                placeholder="Escolha a Data do jogo"
                                value={data}
                                onChangeText={setData}
                                style={{ backgroundColor: '#121212', padding: 10, borderRadius: 8 }}
                            />
                        </View>
                    </InputContainer>
                    <InputLine />
                </FormRow>

                <FormRow>
                    <InputContainer>
                        <Label>Horário</Label>
                        <View style={{ flex: 1 }}>
                            <TextInput
                                placeholder="Escolha o Horário do jogo"
                                value={horario}
                                onChangeText={setHorario}
                                style={{ backgroundColor: '#121212', padding: 10, borderRadius: 8 }}
                            />
                        </View>
                    </InputContainer>
                    <InputLine />
                </FormRow>

                <FormRow>
                    <InputContainer>
                        <Label>Quadra</Label>
                        <View style={{ flex: 1 }}>
                            <Picker
                                selectedValue={quadra}
                                onValueChange={setQuadra}
                                style={{ color: 'white' }}
                            >
                                <Picker.Item label="Escolha o tipo de quadra" value="" />
                                <Picker.Item label="Futebol" value="futebol" />
                                <Picker.Item label="Basquete" value="basquete" />
                            </Picker>
                        </View>
                    </InputContainer>
                    <InputLine />
                </FormRow>

                <FormRow>
                    <InputContainer>
                        <Label>Nível</Label>
                        <View style={{ flex: 1 }}>
                            <Picker
                                selectedValue={nivel}
                                onValueChange={setNivel}
                                style={{ color: 'white' }}
                            >
                                <Picker.Item label="Escolha o Nível do jogo" value="" />
                                <Picker.Item label="Iniciante" value="iniciante" />
                                <Picker.Item label="Intermediário" value="intermediario" />
                                <Picker.Item label="Avançado" value="avancado" />
                            </Picker>
                        </View>
                    </InputContainer>
                    <InputLine />
                </FormRow>

                <Button title="Criar Jogo" size="LARGE" onPress={() => console.log('Jogo criado')} />
            </Content>
        </Container>
    );
}
