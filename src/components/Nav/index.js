import { Menu, Header } from './styles'
import Link from 'next/link'

function Nav (){
    return (
        <Header>
            <Menu>
                <ul>
                    <Link href="/">
                    <li>Home</li>
                    </Link>
                    <Link href="/">
                    <li>Quem sou</li>
                    </Link>
                    <Link href="/">
                    <li>Contato</li>
                    </Link>
                    <Link href="/blog">
                    <li>Blog</li>
                    </Link>
                </ul>
            </Menu>
        </Header>
    )

} 

export default Nav ;