import { Container, Infos, LocIcon, Photo, TimeNews, TimeText, Title, SourceNews, SourceText } from "./styles"

type Props = {
    title: string,
    source: string,
    time: string,
    photo: string 
}

export function NewsCard({ title, source, time, photo }: Props) {
    return (
        <Container>
            <Photo source={{ uri: photo }} />  
            <Infos>
                {/* Certifique-se de que o título está dentro de <Text> */}
                <Title numberOfLines={2}> {title} </Title>  
                <SourceNews>
                    <LocIcon name="location" />
                    {/* Envolva a fonte da notícia em um <Text> */}
                    <SourceText> {source} </SourceText>
                </SourceNews>
                <TimeNews>
                    {/* Envolva o tempo em um <Text> */}
                    <TimeText> {time} atrás </TimeText>
                </TimeNews>
            </Infos>
        </Container>
    )
}
