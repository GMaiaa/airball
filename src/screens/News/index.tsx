import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Container, HeaderNews, NotIcon, TitleHeader, CourtWrapper, HeaderWrapper, TitleSection } from './styles';
import { NewsCard } from '@components/NewsCard';
import { ListEmpty } from '@components/ListEmpty';


export default function Menu() {
  let news = [
    { title: "Trae Young faz ranking dos melhores arremessadores da NBA", source: "Globo", time: '5 horas',  photo: "https://www.jornaldevinhedo.com.br/wp-content/uploads/2019/09/16019_QuadraRep-1.jpg" },
    { title: "Stephen Curry admite", source: "Record", time: '10 horas',  photo: "https://www.jornaldevinhedo.com.br/wp-content/uploads/2019/09/16019_QuadraRep-1.jpg" }
    
  ];

  return (
    <Container>
      <HeaderNews>
        <TitleHeader> Novidades </TitleHeader>
        <NotIcon name='notifications'/>
      </HeaderNews>


      <CourtWrapper>
          <HeaderWrapper>
            <TitleSection> Últimas Noticias </TitleSection>
          </HeaderWrapper>

          <FlatList
            data={news}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <NewsCard title={item.title} source={item.source} time={item.time} photo={item.photo} />
            )}
            horizontal
            style={{height: 200 }}
            contentContainerStyle={{ paddingHorizontal: 10 }} // Adicionando padding horizontal
            ListEmptyComponent={() => (
              <ListEmpty message="Nenhuma Novidade foi cadastrada até o momento." />
            )}
          />
        </CourtWrapper>

    </Container>
  );
}
