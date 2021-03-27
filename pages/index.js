import Header from '../src/components/Header'
import Nav from '../src/components/Nav'

import Image from 'next/image'

function Home() {
    return(   
        <>
        <Header>
            <Image
            src={"/../public/img/logoPadrao.png"}
            alt="Picture of the author"
            width={641}
            height={373}
            />
        </Header>
        <Nav>
            <ul>
                <li>Home</li>
                <li>Quem sou</li>
                <li>Contato</li>
            </ul>
        </Nav>
        </>
    )
}

export default Home