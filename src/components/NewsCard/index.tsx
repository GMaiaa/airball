import { Container, Infos, InfoBy, InfoByText, NewsIcon, Photo, Title, TimeReleased } from "./styles"

type Props = {
    title: string,
    infoBy: string,
    photo: string 
    created_at: string
}

export function NewsCard({ title, infoBy, photo, created_at }: Props) {
    return (
        <Container>
            <Photo source={{ uri: photo }} /> 
            <Title> {title} </Title>
            <Infos>
                <InfoBy>
                    <InfoByText> {infoBy} </InfoByText> 
                    <NewsIcon name="newspaper" />
                </InfoBy>

                <TimeReleased> {created_at} </TimeReleased>
            </Infos>
        </Container>
    )
}
