import React from "react";
import { TouchableOpacity, View } from "react-native";
import {
  Container,
  Icon,
  IconButton,
  ProfilePic,
  UserInfoContainer,
  UserName,
  UserPositionContainer,
  UserPosition,
  UserNamePosition,
} from "./styles";
import theme from "../../theme"; // Ajuste o caminho conforme sua estrutura
import { Feather } from "@expo/vector-icons"; // Importe o ícone que deseja usar

export default function Menu() {
  return (
    <Container>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: 20,
        }}
      >
        <IconButton>
          <Icon name="cross" />
        </IconButton>
      </View>

      <UserInfoContainer>
        <ProfilePic size="large" source={require("@assets/avatar.png")} />
        <View style={{ marginLeft: 15 }}>
          <UserNamePosition>

          <UserName>Nome do Usuário</UserName>
          <UserPositionContainer>
            <UserPosition>Armador</UserPosition>
            <IconButton>
              <Feather name="edit" size={20} color={theme.COLORS.GRAY_100} />
            </IconButton>
          </UserPositionContainer>
          </UserNamePosition>
        </View>
      </UserInfoContainer>
    </Container>
  );
}
