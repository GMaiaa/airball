import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Container, Content, Title, Paragraph } from './styles';
import { BackButton } from '@components/BackButton';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppRoutes } from '@routes/app.routes';
import { useNavigation } from "@react-navigation/native";

export function AboutUs() {
    const navigation = useNavigation<StackNavigationProp<AppRoutes>>();

    function handleBackButtonPress() {
        navigation.navigate("Menu");
    }

    return (
        <Container>

            <ScrollView >
                <BackButton title="Opções de perfil" onPress={() => navigation.navigate("Menu")} />
                <View >
                    <Title>Sobre A Airball</Title>

                    <Paragraph>
                        A Airball nasceu com a missão de transformar a maneira como as pessoas se conectam através do basquete no Brasil. Somos uma plataforma inovadora que permite agendar partidas de basquete entre amigos de maneira prática e divertida, promovendo a união e a interação de comunidades apaixonadas pelo esporte.
                    </Paragraph>

                    <Paragraph>
                        Nosso objetivo é simplificar o processo de organização de jogos, possibilitando que qualquer pessoa, de qualquer lugar, consiga reunir amigos ou encontrar outros jogadores para formar equipes, seja em quadras públicas ou privadas. Além disso, queremos criar um espaço onde todos os jogadores, amadores ou experientes, possam compartilhar a paixão pelo basquete, incentivar o espírito esportivo e estreitar laços de amizade.
                    </Paragraph>

                    <Paragraph>
                        Na Airball, acreditamos que o basquete é mais do que um jogo; é uma forma de conectar pessoas, criar momentos de diversão e melhorar a saúde e o bem-estar. Nossa plataforma é intuitiva, rápida e fácil de usar, para que você possa se concentrar no que realmente importa: a diversão e a competição saudável.
                    </Paragraph>

                    <Paragraph>
                        Junte-se a nós e faça parte da comunidade Airball – a próxima partida de basquete está a apenas um clique de distância!
                    </Paragraph>
                </View>
            </ScrollView>
        </Container>
    );
}
