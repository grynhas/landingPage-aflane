import { Section, Info, Title } from './styles'

function Cards ({children}){
    return (
        <Section>
            <Info>
                <Title>
                    <span>
                        Tratamentos
                    </span>
                </Title>
            </Info>
            <Info>
                {children}
            </Info>
        </Section>
    )

} 

export default Cards;