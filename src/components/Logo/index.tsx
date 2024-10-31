import { Container, LogoImage} from "./styles";
import LogoImg from "@assets/ball.png"

export function Logo(){
    return(
        <Container>
            <LogoImage source={LogoImg}/>
        </Container>
    )
}