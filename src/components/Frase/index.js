import { Section, Info, Figure} from './styles'

function Frase (){
    return (
        <Section>
            <Info>
                <h3>
                    "As artimanhas que usamos para escapar da aflição nos desviam de nossos objetivos de vida.<br /> 
                    E é por eles que vale a pena viver".<br />Steven Hayes
                </h3>
                <p>
                    Pare de fugir da sua dor e aprenda a viver uma vida significativa!
                </p>
                <Figure>
                    <img src="/img/mao.png" alt="Aflane Negão" />
                </Figure>
                <span>
                    Agende sua sessão online!
                </span>
            </Info>
        </Section>
    )

} 

export default Frase;