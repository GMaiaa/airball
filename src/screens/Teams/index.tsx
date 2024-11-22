import React from "react";
import { View, ScrollView } from "react-native";
import {
  Container,
  TeamContainer,
  TeamTitle,
  TeamMembers,
  MemberImage,
  JoinButton,
  CreateTeamButton,
  ButtonText,
} from "./styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AppRoutes } from "@routes/app.routes";
import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import { AppError } from "@utils/AppError";

// Interface para tipar os times
interface Team {
  id: number;
  isTeamA: boolean;
  matchId: number;
  isPrivate: boolean;
  players: { id: string; player: { avatar: string } }[];
  buttonText: string;
}

interface TeamsProps {
  teams: Team[];
}

export default function Teams({ teams }: TeamsProps) {
  const navigation = useNavigation<StackNavigationProp<AppRoutes>>();

  const { user } = useAuth()

  async function joinTeam({ matchId, playerId, teamId }: { matchId: number; playerId: string; teamId: number }) {
    try {
      const data = {
        matchId,
        playerId,
        team: teamId
    };

    const response = await api.post("/matches/addPlayer", data)

    console.log(response.data)
    } catch (error) {
      console.log(error)
      const isAppError = error instanceof AppError;

      const title = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde';

      console.log("ERROR: ", title)
    }
  }

  return (
    <Container>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {teams.map((team) => (
          <TeamContainer key={team.id}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TeamTitle>{team.isTeamA ? "Time A" : "Time B"}</TeamTitle>

              <Feather
                name="globe"
                size={24}
                color="white"
                style={{ marginLeft: 5 }}
              />

            </View>

            <TeamMembers>
              {team.players && team.players.length > 0 ? (
                team.players.map((player) => (
                  <MemberImage key={player.id} source={{ uri: player.player.avatar }} />
                ))
              ) : (
                <ButtonText>Nenhum membro ainda</ButtonText>
              )}
            </TeamMembers>

            <JoinButton onPress={() =>
              joinTeam({ matchId: team.matchId, playerId: user.id, teamId: team.id })
            }>
              <ButtonText>Entrar no time</ButtonText>
            </JoinButton>
          </TeamContainer>
        ))}

      </ScrollView>
    </Container>
  );
}
