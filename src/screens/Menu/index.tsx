import React from "react";
import { View } from "react-native";
import {
  Container,
  IconButton,
  ProfilePic,
  UserInfoContainer,
  UserName,
  UserPositionContainer,
  UserPosition,
  UserNamePosition,
  EditPositionArea,
} from "./styles";
import theme from "../../theme"; // Ajuste o caminho conforme sua estrutura
import { Feather } from "@expo/vector-icons"; // Usando Feather para o novo ícone
import { MenuOption } from "@components/MenuOption";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppRoutes } from '../../routes/app.routes'; // Ajuste o caminho conforme necessário
import { useAuth } from "@hooks/useAuth";

export default function Menu() {
  const navigation = useNavigation<StackNavigationProp<AppRoutes>>(); // Corrigido aqui

  const {signOut} = useAuth()

  function handleMyProfilePress() {
    navigation.navigate("MyProfile");
  }

  function handleContactPress() {
    navigation.navigate("Contact")
  }

  function handleClosePress() {
    navigation.navigate("Home"); 
  }

  return (
    <Container>
      <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 20 }}>
        <IconButton onPress={handleClosePress}>
          <Feather name="x" size={30} color={theme.COLORS.GRAY_100} />
        </IconButton>
      </View>

      <UserInfoContainer>
        <ProfilePic size="large" source={require("@assets/avatar.png")} />
        <View style={{ marginLeft: 15 }}>
          <UserNamePosition>
            <UserName>Nome do Usuário</UserName>
            <UserPositionContainer>
              <EditPositionArea onPress={() => console.log("Clicou no texto ou ícone")}>
                <UserPosition>Armador</UserPosition>
                <Feather name="edit" size={20} color={theme.COLORS.GRAY_100} />
              </EditPositionArea>
            </UserPositionContainer>
          </UserNamePosition>
        </View>
      </UserInfoContainer>

      <MenuOption title="Meu perfil" subtitle="Informações da minha conta" onPress={handleMyProfilePress} />
      <MenuOption title="Contato" subtitle="Entre em contato conosco" onPress={handleContactPress}/>
      <MenuOption title="Sobre a Airball" subtitle="Saiba mais sobre nós" />
      <MenuOption title="Termos e condições" subtitle="Políticas de uso" />
      <MenuOption title="Sair" subtitle="Sair da sua conta" onPress={signOut}/>
    </Container>
  );
}
