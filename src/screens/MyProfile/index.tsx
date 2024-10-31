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

export default function MyProfile() {

  const navigation = useNavigation<StackNavigationProp<AppRoutes>>(); // Corrigido aqui

  function handleBackButtonPress() {
    navigation.navigate("Menu");
  }


  const [modalVisible, setModalVisible] = useState(false);

  // Lista de posições de jogadores de basquete
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

  

  return (
    <Container>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <BackButton title="Opções de perfil" onPress={handleBackButtonPress} />

        <UserPictureArea>
          <ProfilePic size="large" source={require("@assets/avatar.png")} />
          <CameraIcon name="camera" size={24} color="black" />
        </UserPictureArea>

        <Inputs>
          <Input placeholder={"José Dias"} label={"Nome"} />
          <Input placeholder={"Josedias@gmail.com"} label={"Email"} />
          <Input
            placeholder={"Posição preferida na quadra"}
            label={"Posição preferida"}
            options={basketballPositions} 
          />
          <Input
            placeholder={"Diga um pouco sobre como você joga!"}
            label={"Bio"}
            isTextarea={true}
          />
        </Inputs>

        <ButtonsArea>
          <Button title={"Alterar senha"} type="OUTLINED" onPress={() => setModalVisible(true)} />
          <Button title={"Atualizar dados"} />
        </ButtonsArea>

        <UpdateModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      </ScrollView>
    </Container>
  );
}
