import React from 'react';
import { FlatList } from 'react-native';
import { Container, HeaderNews, NotIcon, TitleHeader, CourtWrapper, HeaderWrapper, TitleSection } from './styles';
import { NewsCard } from '@components/NewsCard';
import { ListEmpty } from '@components/ListEmpty';

export default function News() {
  let news = [
    { title: "Trae Young faz ranking dos melhores arremessadores da NBA", source: "Globo", time: '5 horas',  photo: "https://cdn.nba.com/teams/uploads/sites/1610612737/2024/04/Untitled-1-Recovered-1.png?w=384&h=224" },
    { title: "Stephen Curry admite", source: "Record", time: '10 horas',  photo: "https://s2-ge.glbimg.com/Bv-snrywPGX6s7s-b0E7Pj6GPno=/0x0:3182x2229/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/9/R/RUBz5YQPSbMycqMz0zNw/gettyimages-1397138444.jpg" }
  ];

  return (
    <Container>
      {/* Cabeçalho com título e ícone de notificação */}
      <HeaderNews>
        <TitleHeader> Novidades </TitleHeader>
        <NotIcon name='notifications' />
      </HeaderNews>

      <CourtWrapper>
        {/* Título da seção de últimas notícias */}
        <HeaderWrapper>
          <TitleSection> Últimas notícias </TitleSection>
        </HeaderWrapper>

        {/* FlatList horizontal exibindo as notícias */}
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <NewsCard 
              title={item.title} 
              source={item.source} 
              time={item.time} 
              photo={item.photo} 
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}  // Removendo indicador de scroll horizontal
          contentContainerStyle={{ paddingHorizontal: 16 }}  // Ajustando padding
          ListEmptyComponent={() => (
            <ListEmpty message="Nenhuma novidade foi cadastrada até o momento." />
          )}
        />
      </CourtWrapper>
    </Container>

    
  );
}
