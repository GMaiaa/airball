import React from 'react';
import { Feather } from '@expo/vector-icons';
import theme from '../../theme';
import {OptionContainer, OptionTitle, OptionSubtitle} from './styles'
import { View } from 'react-native';

interface MenuOptionProps {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export const MenuOption: React.FC<MenuOptionProps> = ({ title, subtitle, onPress  }) => {
  return (
    <OptionContainer onPress={onPress}>
      <View>
        <OptionTitle>{title}</OptionTitle>
        <OptionSubtitle>{subtitle}</OptionSubtitle>
      </View>
      <Feather name="chevron-right" size={24} color={theme.COLORS.GRAY_100} />
    </OptionContainer>
  );
};

