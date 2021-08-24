import { Section, Info, Contato, Link } from './styles'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

import Logo from '../Logo';

function Temp ({children}){
    return (
        <Section>
            <figure>
                <img src="/img/aflane_negrao.jpg" alt="Aflane Negão" />
            </figure>
            <Info>
                <Logo />
                <Contato>
                    <Link href="https://api.whatsapp.com/send?phone=5561984539409" >
                        Whatsapp
                    </Link>
                    <FaWhatsapp />
                </Contato>
                <Contato>
                    <Link href="https://www.instagram.com/psi.aflane/" >
                        Instagram
                    </Link>
                    <FaInstagram />
                </Contato>
                {children}
            </Info>
        </Section>
    )

} 

export default Temp ;