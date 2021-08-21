import { Section, Info } from './styles'

function Cards ({children}){
    return (
        <Section>
            <Info>
                <div>
                    Tratamentos
                </div>
            </Info>
            <Info>
                {children}
            </Info>
        </Section>
    )

} 

export default Cards;