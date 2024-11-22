import { BackButton } from "@components/BackButton";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppRoutes } from "@routes/app.routes";
import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react";
import { ScrollView, Alert } from "react-native";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Container,
  InputContainer,
  ButtonArea,
} from "./styles"; // Ajuste para o caminho correto
import { Input } from "@components/Input";
import { Button } from "@components/Button";


const reasons = ["Suporte Técnico", "Dúvidas Gerais", "Reclamações", "Outros"];

const contactSchema = yup.object().shape({
  name: yup.string().required("O nome completo é obrigatório"),
  reason: yup
    .string()
    .oneOf(reasons, "Selecione um motivo válido")
    .required("Selecione um motivo"),
  message: yup
    .string()
    .required("A mensagem é obrigatória")
    .max(500, "A mensagem não pode exceder 500 caracteres"),
});

export default function Contact() {

  const navigation = useNavigation<StackNavigationProp<AppRoutes>>(); // Corrigido aqui

  function handleBackButtonPress() {
    navigation.navigate("Menu");
  }


  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      console.log("Formulário enviado com sucesso:", data);
      Alert.alert("Sucesso", "Sua mensagem foi enviada!");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      Alert.alert("Erro", "Ocorreu um erro ao enviar sua mensagem.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        <BackButton title="Opções de perfil" onPress={handleBackButtonPress} />
        <InputContainer>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Seu nome completo"
                label="Nome completo"
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                errorMessage={errors.name?.message}
              />
            )}
          />
        </InputContainer>

        <InputContainer>
          <Controller
            name="reason"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Selecione um motivo"
                label="Motivo"
                options={reasons} // Passa o array de motivos
                value={value}
                onChange={onChange}
                errorMessage={errors.reason?.message}
              />
            )}
          />
        </InputContainer>

        <InputContainer>
          <Controller
            name="message"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Digite sua mensagem"
                label="Mensagem"
                isTextarea
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                errorMessage={errors.message?.message}
              />
            )}
          />
        </InputContainer>

        <ButtonArea>
          <Button
            title={loading ? "Enviando..." : "Enviar"}
            onPress={handleSubmit(onSubmit)}
            disabled={loading}
          />
        </ButtonArea>
      </ScrollView>
    </Container>

  )
}