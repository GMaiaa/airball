import { Container, LogoImage} from "./styles";
import LogoImg from "@assets/logo.png"

export function Logo(){
    return(
        <Container>
            <LogoImage source={LogoImg}/>
        </Container>
    )
}