import React from 'react';
import { Header } from "@components/Header";
import { HeaderMatchs,TitleHeader,Container,FilterButton} from './styles';
import TransparentButton from '@components/TransparentButton';

export default function Matchs() {
  return (
    <Container>
      <Header/>
      <HeaderMatchs>
        <TitleHeader>Suas Partidas</TitleHeader>
        <FilterButton>
        <TransparentButton title='Filtrar' width={150} height={45}/>
        </FilterButton>
      </HeaderMatchs>
    </Container>
  );
}
