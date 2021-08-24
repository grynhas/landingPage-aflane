import { Section, Info, Contato, Link, FigureDesk, FigureMobile } from './styles'
import { FaWhatsapp } from 'react-icons/fa';

import Logo from '../Logo';

function Banner ({children}){
    return (
        <Section>
            <FigureDesk>
                <img src="/img/aflane_negrao_capa.png" alt="Aflane Negrão" />
            </FigureDesk>
            <FigureMobile>
                <img src="/img/aflane_negrao.jpg" alt="Aflane Negão" />
            </FigureMobile>
            <Info>
                <Logo />
                {/* <Contato>
                    <Link href="https://api.whatsapp.com/send?phone=5561984539409" >
                        Fale Comigo
                    </Link>
                    <FaWhatsapp />
                </Contato> */}
                {children}
            </Info>
        </Section>
    )

} 

export default Banner ;