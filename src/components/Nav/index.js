import { Menu } from './styles'
import Link from 'next/link'

function Nav (){
    return (
        <Menu>
            <ul>
                <Link href="/">
                <li>Home</li>
                </Link>
                <Link href="/quemSou">
                <li>Quem sou</li>
                </Link>
                <Link href="/contato">
                <li>Contato</li>
                </Link>
                <Link href="/blog">
                <li>Blog</li>
                </Link>
            </ul>
        </Menu>
    )

} 

export default Nav ;