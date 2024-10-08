import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>News</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,              // Ocupar toda a tela
    justifyContent: 'center', // Centralizar verticalmente
    alignItems: 'center',  // Centralizar horizontalmente
    backgroundColor: '#fff', // Cor de fundo
  },
  text: {
    fontSize: 24,        // Tamanho da fonte
    color: '#333',       // Cor do texto
  },
});
