import { Container, Infos, LocationDistance, LocationText, LocIcon, Photo, Title } from "./styles"

type Props = {
    title: string,
    distance: number,
    photo: string 
}

export function CourtCard({ title, distance, photo }: Props) {
    return (
        <Container>
            <Photo source={{ uri: photo }} /> 
            <Infos>
                <Title> {title} </Title>
                <LocationDistance>
                    <LocationText> {distance} km </LocationText> 
                    <LocIcon name="location" />
                </LocationDistance>
            </Infos>
        </Container>
    )
}