import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, CommentContainer, Avatar, TextContainer, Name, CommentText, InputContainer, Input, Button, ButtonText } from './styles';
import MariaAvatar from '@assets/avatar.png';

const commentsData = [
  { id: '1', name: 'Maria', comment: 'Boa estrutura, jogo de nível alto.', avatar: MariaAvatar },
  { id: '2', name: 'João', comment: 'Muito Nóia', avatar: MariaAvatar },
  { id: '3', name: 'José', comment: 'Vou todos os dias, top', avatar: MariaAvatar },
];

const CommentsPage = () => {
  const [comment, setComment] = useState('');

  const handleSend = () => {
    if (comment) {
      // Handle the new comment submission
      console.log('New comment:', comment);
      setComment('');
    }
  };

  return (
    <Container>
      <FlatList
        data={commentsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CommentContainer>
            <Avatar source={item.avatar} />
            <TextContainer>
              <Name>{item.name}</Name>
              <CommentText>{item.comment}</CommentText>
            </TextContainer>
          </CommentContainer>
        )}
      />
      <InputContainer>
        <Input
          placeholder="Adicione um comentário ..."
          placeholderTextColor="#999"
          value={comment}
          onChangeText={setComment}
        />
        <Button onPress={handleSend}>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default CommentsPage;
