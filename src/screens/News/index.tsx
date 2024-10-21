import React from 'react';
import { FlatList } from 'react-native';
import { Container, HeaderNews, LatestNews, NotIcon, TitleHeader, TitleLatest } from './styles';
import { NewsCard } from '../../components/NewsCard';

// Sample data for news items
const newsData = [
  {
    id: '1',
    title: 'New Court Opening in Downtown',
    infoBy: 'City News',
    photo: 'https://example.com/court1.jpg',
    created_at: '2h ago'
  },
  {
    id: '2',
    title: 'Basketball Tournament This Weekend',
    infoBy: 'Sports Update',
    photo: 'https://example.com/tournament.jpg',
    created_at: '5h ago'
  },
  {
    id: '3',
    title: 'Court Renovation Project Announced',
    infoBy: 'Local Gov',
    photo: 'https://example.com/renovation.jpg',
    created_at: '1d ago'
  },
  // Add more items as needed
];

export default function News() {
  return (
    <Container>
      <HeaderNews>
        <TitleHeader>Novidades</TitleHeader>
        <NotIcon name='notifications'/>
      </HeaderNews>

      <LatestNews>
        <TitleLatest>Últimas notícias</TitleLatest>
      </LatestNews>

      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <NewsCard
            title={item.title}
            infoBy={item.infoBy}
            photo={item.photo}
            created_at={item.created_at}
          />
        )}
      />
    </Container>
  );
}