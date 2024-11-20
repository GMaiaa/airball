import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from "@components/Button";
import { Container, Content, FormRow, Label, InputContainer, InputLine, InputText } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';
import { api } from '@services/api';
import { useAuth } from '@hooks/useAuth';

export default function NewGame(id: any) {
    const [frequencia, setFrequencia] = useState('');
    const [dataHora, setDataHora] = useState(new Date());  // Unificando data e hora
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [quadra, setQuadra] = useState('');
    const [nivel, setNivel] = useState('');

    const { user } = useAuth()

    const onChangeDate = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || dataHora;
        setShowDatePicker(false);
        setDataHora(new Date(currentDate.setHours(dataHora.getHours(), dataHora.getMinutes()))); // Mantém o horário atual
    };

    const onChangeTime = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || dataHora;
        setShowTimePicker(false);
        setDataHora(new Date(dataHora.setHours(currentTime.getHours(), currentTime.getMinutes()))); // Atualiza o horário mantendo a data
    };

    const capitalizeFirstLetter = (string: string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    
    async function createMatch() {
        try {
            const data = {
                date: dataHora.toISOString(),  
                status: "scheduled",
                courtId: id.id,
                teamAPlayers: [user.id],
                teamBPlayers: []  
            };

            await api.post("/matches/create", data);
            console.log('Jogo criado com sucesso');
        } catch (error) {
            console.error('Erro ao criar jogo:', error);
        }
    }

    return (
        <ScrollView>
            <Container>
                <Content>
                    <FormRow>
                        <InputLine />
                        <InputContainer> 
                            <Label>Frequência</Label>
                            <AntDesign name="sync" size={24} color="white"/>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={frequencia}
                                    onValueChange={setFrequencia}
                                    style={{ color: 'white' }}
                                >
                                    <Picker.Item label="Escolha a frequência de jogos" value="" />
                                    <Picker.Item label="Semanal" value="semanal" />
                                    <Picker.Item label="Mensal" value="mensal" />
                                    <Picker.Item label="Diário" value="diario" />
                                    <Picker.Item label="Jogo Único" value="unico" />
                                </Picker>
                            </View>
                        </InputContainer>
                        <InputLine />
                    </FormRow>

                    <FormRow>
                        <InputContainer>
                            <Label>Data e Horário</Label>
                            <FontAwesome5 name="calendar-alt" size={24} color="white"/>
                            <TouchableOpacity onPress={() => { setShowDatePicker(true); setShowTimePicker(true); }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <InputText
                                        editable={false}
                                        placeholder="Escolha a Data e Horário do jogo"
                                        value={capitalizeFirstLetter(
                                            dataHora.toLocaleString('pt-BR', { 
                                                weekday: 'long', 
                                                day: '2-digit', 
                                                month: '2-digit', 
                                                year: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                            })
                                        )}
                                        style={{ color: 'white', fontSize: 16 }}
                                    />
                                </View>
                            </TouchableOpacity>
                            {showDatePicker && (
                                <DateTimePicker
                                    value={dataHora}
                                    mode="date"
                                    display="default"
                                    onChange={onChangeDate}
                                />
                            )}
                            {showTimePicker && (
                                <DateTimePicker
                                    value={dataHora}
                                    mode="time"
                                    display="default"
                                    onChange={onChangeTime}
                                />
                            )}
                        </InputContainer>
                        <InputLine />
                    </FormRow>

                    <FormRow>
                        <InputContainer>
                            <Label>Quadra</Label>
                            <FontAwesome5 name="basketball-ball" size={24} color="white"/>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={quadra}
                                    onValueChange={setQuadra}
                                    style={{ fontSize: 12, color: 'white' }}
                                >
                                    <Picker.Item label="Tipo de quadra" value="" />
                                    <Picker.Item label="Meia Quadra" value="meia" />
                                    <Picker.Item label="Quadra Inteira" value="inteira" />
                                </Picker>
                            </View>
                        </InputContainer>
                        <InputLine />
                    </FormRow>

                    <FormRow>
                        <InputContainer>
                            <Label>Nível</Label>
                            <FontAwesome5 name="trophy" size={24} color="white"/>
                            <View style={{ flex: 1 }}>
                                <Picker
                                    selectedValue={nivel}
                                    onValueChange={setNivel}
                                    style={{ color: 'white', fontSize: 12 }}
                                    itemStyle={{ fontSize: 12, color: 'white' }}
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

                    <Button title="Criar Jogo" size="LARGE" onPress={createMatch} />
                </Content>
            </Container>
        </ScrollView>
    );
}
