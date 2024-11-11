import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {Container,CourtContainer,CourtImage,AddButton,AddText,PlayerOnCourt,PlayerContainer,PlayerImage,PlayerName,BenchContainer,AddButtonBench,BenchText,TextDivision} from './styles';
import { Header } from "@components/Header";
import { TeamHeader } from "@components/TeamHeader";


const Player = ({ name }: { name: string }) => {
  return (
    <PlayerContainer>
      <PlayerImage
        source={require('@assets/avatar.png')}
      />
      <PlayerName>{name}</PlayerName>
    </PlayerContainer>
  );
};

export default function TeamDetails() {
  return (
    <Container>
      <TeamHeader title="Lakers"/>
      <CourtContainer>
        <CourtImage source={require('@assets/CourtBackground.png')} /> 
        <AddButton top="52%" left="45%">
          <AddText>+</AddText>
        </AddButton>
        <AddButton top="60%" left="10%">
          <AddText>+</AddText>
        </AddButton>
        <PlayerOnCourt top="70%" left="29%">
          <Player name="Maria" />
        </PlayerOnCourt>
        <PlayerOnCourt top="60%" left="77%">
          <Player name="José" />
        </PlayerOnCourt>
        <PlayerOnCourt top="76%" left="64%">
          <Player name="João" />
        </PlayerOnCourt>
      </CourtContainer>
      <TextDivision>
        <BenchText>Banco</BenchText>
      </TextDivision>
      <BenchContainer horizontal contentContainerStyle={{ padding: 10}}>
          <AddButtonBench>
            <AddText>+</AddText>
          </AddButtonBench>
          <AddButtonBench>
            <AddText>+</AddText>
          </AddButtonBench>
          <AddButtonBench>
            <AddText>+</AddText>
          </AddButtonBench>
          <AddButtonBench>
            <AddText>+</AddText>
          </AddButtonBench>
          <AddButtonBench>
            <AddText>+</AddText>
          </AddButtonBench>
      </BenchContainer>
    </Container>
  );
}
