import { ComponentProps } from "react"
import { Container, CategoryText } from "./styles"

type Props = Omit<ComponentProps<typeof Container>, 'isActive'> & {
    name: string
    isActive: boolean
}

export function Category({name, isActive, ...rest} : Props ){
    return(
        <Container isActive={isActive} {...rest}>
            <CategoryText isActive={isActive}>{name}</CategoryText>
        </Container>
    )
}