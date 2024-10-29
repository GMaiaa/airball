import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Infos, LocationDistance, LocationText, LocIcon, Photo, Title } from "./styles";

type Props = {
    title: string;
    distance: number;
    photo: string; // URL da imagem como string
    onPress: () => void; // Callback para clique
};

export function CourtCard({ title, distance, photo, onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
            <Container>
                <Photo source={{ uri: photo }} resizeMode="cover" />
                <Infos>
                    <Title>{title}</Title>
                    <LocationDistance>
                        <LocationText>{distance.toFixed(1)} km</LocationText>
                        <LocIcon name="location" size={16} color="#333" />
                    </LocationDistance>
                </Infos>
            </Container>
        </TouchableOpacity>
    );
}
