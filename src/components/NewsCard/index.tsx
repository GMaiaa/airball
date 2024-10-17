import { Container, Infos, LocIcon, Photo, TimeNews, TimeText, Title, SourceNews, SourceText } from "./styles"

type Props = {
    title: string,
    source: string,
    time: string,
    photo: string 
}

export function CourtCard({ title, source, time, photo }: Props) {
    return (
        <Container>
            <Photo source={{ uri: photo }} /> 
            <Infos>
                <Title> {title} </Title>
                <SourceNews>
                    <LocIcon name="location" />
                    <SourceText> {source}</SourceText> 
                </SourceNews>
                <TimeNews>
                    <TimeText> {time} hours</TimeText> 
                    <LocIcon name="location" />
                </TimeNews>
            </Infos>
        </Container>
    )
}