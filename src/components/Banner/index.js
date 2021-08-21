import { Section, Info, Contato, Link } from './styles'
import { FaWhatsapp } from 'react-icons/fa';

import Logo from '../Logo';

function Banner (){
    return (
        <Section>
            <figure>
                <img src="/img/aflane_negrao_capa.png" alt="Aflane Negrão" />
            </figure>
            <Info>
                <Logo />
                <Contato>
                    <Link href="https://api.whatsapp.com/send?phone=5561984539409" >
                        Fale Comigo
                    </Link>
                    <FaWhatsapp />
                </Contato>
            </Info>
        </Section>
    )

} 

export default Banner ;