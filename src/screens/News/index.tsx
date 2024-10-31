import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, HeaderNews, LatestNews, NotIcon, TitleHeader, TitleLatest } from './styles';
import { NewsCard } from '@components/NewsCard';
import { Category } from '@components/Category';

// Sample data for news items
const newsData = [
  {
    id: '1',
    title: 'Lakers x Timberwolves: onde assistir ao vivo e horário',
    infoBy: 'Globo',
    photo: 'https://s2-ge.glbimg.com/MT5PQpddIwRwS5D7StZ1fKmdXvc=/0x0:1024x683/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/t/C/FamYnRRI24l4N29XUwYQ/gettyimages-2179496630.jpg',
    created_at: '2h ago'
  },
  {
    id: '2',
    title: 'Milwaukee Bucks podem chegar mais longe nesta temporada da NBA?',
    infoBy: 'Fernando Moraes',
    photo: 'http://res.cloudinary.com/ybmedia/image/upload/c_crop,h_410,w_1024,x_0,y_78/c_fill,f_auto,h_480,q_auto,w_1200/v1/m/5/1/51f747de43be0a3d1cad2e3a0a2b1cd5a520e78f/USATSI_22747131_168404824_lowres-1024x682.jpg',
    created_at: '5h ago'
  },
  {
    id: '3',
    title: 'Na reestreia de Raulzinho no Brasil, Pinheiros vence Vasco fora de casa no NBB',
    infoBy: 'Globo',
    photo: 'https://s2-ge.glbimg.com/fKwyxTGEGLyhLajvfx_EYFfLxbg=/0x0:2400x3000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2024/E/h/jAmQ5xR0iZgUWikvfNdg/dsc-4967.jpg',
    created_at: '1d ago'
  },
  // Add more items as needed
];

export default function News() {
  const [categorys, setCategorys] = useState(["Todas", "NBA", "NBB", "Eventos"]);
  const [categorySelected, setCategorySelected] = useState("Todas")


  return (
    <Container>
      <HeaderNews>
        <TitleHeader>Novidades</TitleHeader>
        <NotIcon name='notifications' />
      </HeaderNews>

      <LatestNews>
        <TitleLatest>Últimas notícias</TitleLatest>


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
      </LatestNews>

      <LatestNews>
        <FlatList data={categorys}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Category name={item} isActive={categorySelected.toLowerCase() === item.toLowerCase()} onPress={() => setCategorySelected(item)} />
          )}
          horizontal

          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 32 }}
          style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
        />

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
      </LatestNews>
    </Container>
  );
}