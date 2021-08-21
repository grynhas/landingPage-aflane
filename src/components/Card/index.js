import { Container, Figure, Paragrafo, Span  } from './styles'

function Card ({title, paragrafo, img, alt}){
    return (
        <Container>
            <Span>
                {title}
            </Span>
            <Paragrafo>
                {paragrafo}
            </Paragrafo>
            <Figure>
                <img src={`img/${img}`} alt={`${alt}`} />
            </Figure>
        </Container>
    )

} 

export default Card;