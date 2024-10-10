import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, HeaderNews, NotIcon, TitleHeader } from './styles';

export default function Menu() {
  return (
    <Container>
      <HeaderNews>
        <TitleHeader> Novidades </TitleHeader>
        <NotIcon name='notifications'/>
      </HeaderNews>
    </Container>
  );
}
