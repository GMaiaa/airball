import React from 'react';
import { ScrollView } from 'react-native'; // Importe ScrollView
import { Header } from "@components/Header";
import { HeaderMatchs, TitleHeader, Container, FilterButton, Line } from './styles';
import CardComponent from '@components/MatchCard';
import { Button } from '@components/Button';



export default function Matchs() {
  return (
    <Container>
      <Header />
      <HeaderMatchs>
        <TitleHeader>Suas Partidas</TitleHeader>
        <FilterButton>
          <Button type='OUTLINED' title='Filtrar' size='SMALL'/>
        </FilterButton>
      </HeaderMatchs>
      <Line />
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <CardComponent 
          title="Ibirapuera Tarde" 
          timestamp="15 Horas - Todos os dias" 
          location="Parque Ibirapuera" 
          userCount="10" 
        />
        <CardComponent 
          title="Sesc Paulista" 
          timestamp="15 Horas - Todos os dias" 
          location="Avenida Paulista - Sesc Paulista" 
          userCount="10" 
        />
        <CardComponent 
          title="Sesc Itaquera" 
          timestamp="15 Horas - Todos os dias" 
          location="Itaquera - Sesc Itaquera" 
          userCount="10" 
        />
      </ScrollView>
    </Container>
  );
}
