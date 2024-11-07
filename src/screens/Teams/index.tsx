import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Container, TeamContainer, TeamTitle, TeamMembers, MemberImage, JoinButton, CreateTeamButton, ButtonText } from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from '@expo/vector-icons/Feather';

// Importe as imagens de avatar diretamente
import avatar1 from "@assets/avatar.png";
import avatar2 from "@assets/avatar.png";
import avatar3 from "@assets/avatar.png";
import avatar4 from "@assets/avatar.png";
import avatar5 from "@assets/avatar.png";

export default function Teams() {
  const teams = [
    {
      id: 1,
      name: "Time 1",
      members: [avatar1, avatar2, avatar3,avatar4,avatar5],
      isPrivate: true,
      buttonText: "Pedir para entrar",
    },
    {
      id: 2,
      name: "Time Lakers",
      members: [avatar1, avatar2, avatar3,avatar4],
      isPrivate: false,
      buttonText: "Entrar",
    },
    {
      id: 3,
      name: "Time Brazas",
      members: [avatar1, avatar2, avatar3],
      isPrivate: false,
      buttonText: "Entrar",
    },
  ];

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {teams.map((team) => (
          <TeamContainer key={team.id}>
            <View style={{ flexDirection: "row" }}>
              <TeamTitle>{team.name}</TeamTitle>
              {team.isPrivate ? (
                <AntDesign name="lock" size={24} color="white" style={{ marginLeft: 5 }} />
              ) : (
                <Feather name="globe" size={24} color="white" style={{ marginLeft: 5 }} />
              )}
            </View>
            <TeamMembers>
              {team.members.map((member, index) => (
                <MemberImage key={index} source={member} />
              ))}
            </TeamMembers>
            <JoinButton>
              <ButtonText>{team.buttonText}</ButtonText>
            </JoinButton>
          </TeamContainer>
        ))}
        <CreateTeamButton>
          <ButtonText>Criar Time</ButtonText>
          <Feather name="arrow-right" size={18} color="white" />
        </CreateTeamButton>
      </ScrollView>
    </Container>
  );
}
