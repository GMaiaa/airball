import { Container, LocIcon, LocText, LocWrapper, NotIcon } from "./styles"

type Props = {
    showHomeVersion?: boolean
}


export function Header({ showHomeVersion = false }: Props) {
    return (
        <Container>
            {
                showHomeVersion && 
                <>
               
                <LocWrapper>
                   <LocIcon name="location"/> 
                   <LocText> Av. Águia de Haia</LocText>
                </LocWrapper>
                <NotIcon name="notifications"/>
                </>
            }
        </Container>
    )
}