import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, CourtWrapper, HeaderWrapper, Icon, IconButton, Title, TitleSection } from './styles';
import { Header } from '@components/Header';

export default function Home() {
  return (
   <Container>
    <Header showHomeVersion/>
    <Content>
      <Title> Bem vindo ao AirBall! Pronto para dominar a quadra? </Title>

      <CourtWrapper>
        <HeaderWrapper>
        <TitleSection> Quadras </TitleSection>
        <View style={{gap: 4, flexDirection: "row" }}>
          <IconButton><Icon name='map'/></IconButton>
          <IconButton><Icon name='menu'/></IconButton>
        </View>
        </HeaderWrapper>
        
      </CourtWrapper>
    </Content>
   </Container>
  );
}
