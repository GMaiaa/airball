import { Text, Pressable } from 'react-native';
import { styles } from './styles'; // Certifique-se de que os estilos estão definidos corretamente
import React from 'react';

type DimensionValue = number | 'auto' | `${number}%`;

interface TransparentButtonProps {
  title: string;
  width: DimensionValue;
  height: DimensionValue;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({ title, width, height }) => {
  return (
    <Pressable style={[styles.Content, { width, height }]}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

export default TransparentButton;

