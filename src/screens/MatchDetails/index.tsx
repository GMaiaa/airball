import { useState } from "react";
import { ScrollView } from "react-native";
import { Container, CourtHeader, ImageCourt, Title, Line, Content, IconContainer, TabContainer, TabButton, TabButtonText,MatchName,ProfileRow,ProfilePic,UserIcon,GhostText} from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import CardComponent from '@components/MatchCard';
import CreateGameScreen from "@screens/NewGame";
import CommentsPage from "@screens/Comments";
import CourtIllustration from "@assets/Court.png";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export default function MatchDetails() {
  const [selectedTab, setSelectedTab] = useState("Jogos");

  return (
    <Container>
      <Header />
      <Line />
      
      <CourtHeader>
        <ImageCourt source={CourtIllustration} />
        <Title>Quadra Parque Ibirapuera</Title>
        <IconContainer>
          <AntDesign name="sharealt" size={24} color="white" />
          <AntDesign name="hearto" size={24} color="white" />
        </IconContainer> 
        <MatchName>Baskabira</MatchName>
        <ProfileRow>
          <ProfilePic source={require('@assets/avatar.png')} />
          <ProfilePic  source={require('@assets/avatar.png')} />
          <ProfilePic source={require('@assets/avatar.png')} />
          <UserIcon>
            <FontAwesome5 name="user-alt" color="black" />
            <GhostText>10</GhostText>
          </UserIcon>
        </ProfileRow>
      </CourtHeader>
      <TabContainer>
        <TabButton isActive={selectedTab === "Jogos"} onPress={() => setSelectedTab("Jogos")}>
          <TabButtonText isActive={selectedTab === "Jogos"}>Jogos</TabButtonText>
        </TabButton>
        <TabButton isActive={selectedTab === "Comentários"} onPress={() => setSelectedTab("Comentários")}>
          <TabButtonText isActive={selectedTab === "Comentários"}>Times</TabButtonText>
        </TabButton>
      </TabContainer>
    </Container>
  );
}
