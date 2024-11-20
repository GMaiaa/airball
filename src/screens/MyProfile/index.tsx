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
import * as ImagePicker from 'expo-image-picker';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from '@hooks/useAuth';
import { api } from '@services/api';


const basketballPositions = [
  "Armador",
  "Ala-armador",
  "Ala",
  "Ala-pivô",
  "Pivô",
];

const profileSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email("E-mail inválido").required("O e-mail é obrigatório"),
  position: yup
    .string()
    .oneOf(basketballPositions, "Posição preferida inválida")
    .required("A posição preferida é obrigatória"),
  bio: yup.string().max(300, "A bio não pode exceder 300 caracteres"),
});

export default function MyProfile() {

  const navigation = useNavigation<StackNavigationProp<AppRoutes>>();
  const [userAvatar, setUserAvatar] = useState<ImagePicker.ImagePickerAsset | null>(null);
  const { user, updateUser } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: user.name || "",
      email: user.email || "",
      position: user.prefered_position || "",
      bio: user.bio || "",
    },
  });

  function handleBackButtonPress() {
    navigation.navigate("Menu");
  }

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setUserAvatar(result.assets[0]);
    }
  };

  const [modalVisible, setModalVisible] = useState(false);



  const onSubmit = async (data: any) => {
    try {
      const response = await api.put(`users/${user.id}`, {
        name: data.name,
        prefered_position: data.position,
        avatar: userAvatar ? userAvatar.uri : user.avatar,
        bio: data.bio,
      });
  
      const updatedUser = {
        ...user,
        name: data.name,
        prefered_position: data.position,
        avatar: userAvatar ? userAvatar.uri : user.avatar,
        bio: data.bio,
      };
  
      await updateUser(updatedUser); 
  
      console.log("Usuário atualizado com sucesso:", response.data);
  
    } catch (error) {
      console.error("Erro ao atualizar perfil:", error);
      alert("Ocorreu um erro ao atualizar o perfil.");
    }
  };


  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <BackButton title="Opções de perfil" onPress={() => navigation.navigate("Menu")} />

        <UserPictureArea onPress={selectImage}>
          <ProfilePic size="large" source={userAvatar ? { uri: userAvatar.uri } : (user.avatar ? { uri: user.avatar } : require("@assets/avatarDefault.png"))} />
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
                value={value}
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
                value={value}
                errorMessage={errors.email?.message}
              />
            )}
          />

          <Controller
            name="position"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="Posição preferida na quadra"
                label="Posição preferida"
                options={basketballPositions}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
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
                value={value}
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
