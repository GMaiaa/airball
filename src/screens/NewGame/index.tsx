import React, { useState } from 'react';
import { View,TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Button } from "@components/Button";
import { Container, Content, FormRow, Label, InputContainer, InputLine, InputText } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome5 } from '@expo/vector-icons';

export default function NewGame() {
    const [frequencia, setFrequencia] = useState('');
    const [data, setData] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [horario, setHorario] = useState(new Date());
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [quadra, setQuadra] = useState('');
    const [nivel, setNivel] = useState('');

    const onChangeDate = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || data;
        setShowDatePicker(false); // Fecha o seletor de data
        setData(currentDate);
    };

    const onChangeTime = (event: any, selectedTime?: Date) => {
        const currentTime = selectedTime || horario;
        setShowTimePicker(false); // Fecha o seletor de horário
        setHorario(currentTime);
    };

    return (
        <ScrollView>
        <Container>
            <Content>
            <FormRow>
            <InputLine />
                <InputContainer> 
                    <Label>Frequência</Label>
                    <AntDesign name="sync" size={24} color="white" style={{ marginLeft: 17 }}/>
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

            {/* Seletor de Data com ícone */}
            <FormRow>
                <InputContainer>
                    <Label>Data</Label>
                    <FontAwesome5 name="calendar-alt" size={24} color="white" style={{ marginLeft: 20 }} />
                    <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <InputText
                                editable={false}
                                placeholder="Escolha a Data do jogo"
                                value={data.toLocaleDateString()}
                                style={{ color: 'white' }}
                            />
                        </View>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={data}
                            mode="date"
                            display="default"
                            onChange={onChangeDate}
                        />
                    )}
                </InputContainer>
                <InputLine />
            </FormRow>

            {/* Seletor de Horário com ícone */}
            <FormRow>
                <InputContainer>
                    <Label>Horário</Label>
                    <FontAwesome5 name="clock" size={24} color="white" style={{ marginLeft: 16 }} />
                    <TouchableOpacity onPress={() => setShowTimePicker(true)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <InputText
                                editable={false}
                                placeholder="Escolha o Horário do jogo"
                                value={horario.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                style={{ color: 'white' }}
                            />
                        </View>
                    </TouchableOpacity>
                    {showTimePicker && (
                        <DateTimePicker
                            value={horario}
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
                    <FontAwesome5 name="basketball-ball" size={24} color="white" style={{ marginLeft: 49 }} />
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
                    <FontAwesome5 name="trophy" size={24} color="white" style={{ marginLeft: 70 }}/>
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
                <Button title="Criar Jogo" size="LARGE" onPress={() => console.log('Jogo criado')} />
            </Content>
        </Container>
        </ScrollView>
    );
}
