import React from 'react';
import {Card,Title,ProfileRow,ProfilePic,UserIcon,GhostText,Timestamp,Location,PlayButton,PlayText,LocationContainer} from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface MatchCardProps {
  title: string;
  timestamp: string;
  location: string;
  userCount: string;
  size?: 'large' | 'small'; // Prop opcional para escolher o tamanho do cartão
  width?: number; // Prop opcional para definir a largura do cartão
}

const MatchCard: React.FC<MatchCardProps> = ({ title, timestamp, location, userCount, size = 'large', width }) => {
  return (
    <Card size={size} width={width}>
      <Title size={size}>{title}</Title>
      <ProfileRow>
        <ProfilePic size={size} source={require('@assets/avatar.png')} />
        <ProfilePic size={size} source={require('@assets/avatar.png')} />
        <ProfilePic size={size} source={require('@assets/avatar.png')} />
        <UserIcon size={size}>
          <FontAwesome5 name="user-alt" size={size === 'small' ? 8 : 10} color="black" />
          <GhostText size={size}>{userCount}</GhostText>
        </UserIcon>
      </ProfileRow>

      {/* Renderizar o Timestamp e o Location somente se não for 'small' */}
      {/* Quando o tamanho é 'small', omitimos a exibição do Timestamp e do Location para um layout mais compacto. */}
      {size !== 'small' && <Timestamp>{timestamp}</Timestamp>}
      {size !== 'small' && (
        <LocationContainer>
          <Entypo name="location" size={20} color="white" />
          <Location>{location}</Location>
        </LocationContainer>
      )}

      <PlayButton size={size}>
        <PlayText size={size}>▶ Play</PlayText>
      </PlayButton>
    </Card>
  );
};

export default MatchCard;
