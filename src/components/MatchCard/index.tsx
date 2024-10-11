import React from 'react';
import { Card, Title, ProfileRow, ProfilePic, UserIcon, GhostText, Timestamp, Location, PlayButton, PlayText, LocationContainer } from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

// Defina a interface para as props
interface CardComponentProps {
  title: string;
  timestamp: string;
  location: string;
  userCount: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ title, timestamp, location, userCount }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <ProfileRow>
        <ProfilePic source={require('@assets/avatar.png')} />
        <ProfilePic source={require('@assets/avatar.png')} />
        <ProfilePic source={require('@assets/avatar.png')} />
        <ProfilePic source={require('@assets/avatar.png')} />
        <ProfilePic source={require('@assets/avatar.png')} />
        <UserIcon>
          <FontAwesome5 name="user-alt" size={10} color="black" />
          <GhostText>{userCount}</GhostText>
        </UserIcon>
      </ProfileRow>
      <Timestamp>{timestamp}</Timestamp>
      <LocationContainer>
        <Entypo name="location" size={20} color="white" />
        <Location>{location}</Location>
      </LocationContainer>
      <PlayButton>
        <PlayText>▶ Play</PlayText>
      </PlayButton>
    </Card>
  );
};

export default CardComponent;
