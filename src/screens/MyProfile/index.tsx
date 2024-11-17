import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { BackButton } from "@components/BackButton";
import {
  ButtonsArea,
  CameraIcon,
  Container,
  Inputs,
  ProfilePic,
  UserPictureArea,
} from "./styles";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { UpdateModal } from '../../components/UpdateModal'; // Ajuste o caminho conforme necessário
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from '@routes/auth.routes';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from '@routes/app.routes';
import * as yup from "yup";
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth';

const profileSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  position: yup.string().required("A posição preferida é obrigatória"),
  bio: yup.string().max(300, "A bio não pode exceder 300 caracteres"),
});

export default function MyProfile() {

  const navigation = useNavigation<StackNavigationProp<AppRoutes>>(); 
  const { user } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
  });

  function handleBackButtonPress() {
    navigation.navigate("Menu");
  }


  const [modalVisible, setModalVisible] = useState(false);

  const basketballPositions = [
    "Armador",
    "Ala",
    "Ala-pivô",
    "Pivô",
    "Cesta",
    "Deslocamento",
    "Point Guard",
    "Shooting Guard",
    "Small Forward",
    "Power Forward",
    "Center"
  ];

  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
  };

  

  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <BackButton title="Opções de perfil" onPress={() => navigation.navigate("Menu")} />

        <UserPictureArea>
          <ProfilePic size="large" source={user.avatar ? { uri: user.avatar } : require("@assets/avatarDefault.png")} />
          <CameraIcon name="camera" size={24} color="black" />
        </UserPictureArea>

        <Inputs>
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="José Dias"
                label="Nome"
                onChangeText={onChange}
                onBlur={onBlur}
                value={user.name}
                errorMessage={errors.name?.message}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Josedias@gmail.com"
                label="Email"
                keyboardType="email-address"
                onChangeText={onChange}
                onBlur={onBlur}
                value={user.email}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="position"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Posição preferida na quadra"
                label="Posição preferida"
                options={basketballPositions}
                onChangeText={onChange}
                value={user.prefered_position}
                errorMessage={errors.position?.message}
              />
            )}
          />

          <Controller
            name="bio"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Diga um pouco sobre como você joga!"
                label="Bio"
                isTextarea
                onChangeText={onChange}
                onBlur={onBlur}
                value={user.bio}
                errorMessage={errors.bio?.message}
              />
            )}
          />
        </Inputs>

        <ButtonsArea>
          <Button title="Alterar senha" type="OUTLINED" onPress={() => setModalVisible(true)} />
          <Button title="Atualizar dados" onPress={handleSubmit(onSubmit)} />
        </ButtonsArea>

        <UpdateModal visible={modalVisible} onClose={() => setModalVisible(false)} />
      </ScrollView>
    </Container>
  );
}
