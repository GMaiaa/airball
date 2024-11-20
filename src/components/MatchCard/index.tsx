import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Card, Title, ProfileRow, ProfilePic, UserIcon, GhostText, Timestamp, Location, PlayButton, PlayText, LocationContainer } from './styles';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

type AppRoutes = {
  MatchDetails: undefined;
  // outras rotas, caso necessário
};

interface MatchCardProps {
  title: string;
  timestamp: string;
  location: string;
  userCount: string;
  size?: 'large' | 'small'; // Prop opcional para escolher o tamanho do cartão
  width?: number; // Prop opcional para definir a largura do cartão
}

const MatchCard: React.FC<MatchCardProps> = ({ title, timestamp, location, userCount, size = 'large', width }) => {
  const navigation = useNavigation<NativeStackNavigationProp<AppRoutes>>();

  const handlePress = () => {
    navigation.navigate('MatchDetails');
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
      <Card size={size} width={width}>
        <Title size={size}>{title}</Title>
        <ProfileRow>
          <ProfilePic size={size} source={require('@assets/avatarDefault.png')} />
          <UserIcon size={size}>
            <FontAwesome5 name="user-alt" size={size === 'small' ? 8 : 10} color="black" />
            <GhostText size={size}>{userCount}</GhostText>
          </UserIcon>
        </ProfileRow>

        {/* Renderizar o Timestamp e o Location somente se não for 'small' */}
        {size !== 'small' && <Timestamp>{timestamp}</Timestamp>}
        {size !== 'small' && (
          <LocationContainer>
            <Entypo name="location" size={20} color="white" />
            <Location>{location}</Location>
          </LocationContainer>
        )}

        <PlayButton size={size} onPress={handlePress}>
          <PlayText size={size}>▶ Play</PlayText>
        </PlayButton>
      </Card>
    </TouchableOpacity>
  );
};

export default MatchCard;
