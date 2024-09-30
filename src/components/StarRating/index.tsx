import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Container, StarItem, EmptySpace } from './styles';
import theme from '@theme/index';

const StarRating = ({ rating, onRate }) => {
  const [selectedRating, setSelectedRating] = useState(rating);

  const handlePress = (newRating: number) => {
    setSelectedRating(newRating);
    onRate(newRating);
    console.log('rating', rating)
    console.log('selectedRating', selectedRating)
  };

  return (
    <Container>
      {[1, 2, 3, 4, 5].map((starIndex) => (
        <StarItem key={starIndex} onPress={() => handlePress(starIndex)}>
          {selectedRating >= starIndex ? (
            <FontAwesome name="star" size={24} color={theme.COLORS.GRAY_100} />
          ) : (
            <FontAwesome name="star-o" size={24} color={theme.COLORS.GRAY_100} />
          )}
        </StarItem>
      ))}
    </Container>
  );
};

export default StarRating;