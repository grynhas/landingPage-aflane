import Header from '../src/components/Header'
import Logo from '../src/components/Logo'
import Nav from '../src/components/Nav'
import SimpleSlider from '../src/components/Carrossel'


function Home() {
    return(   
        <>
            <Header>
                <Logo />
            </Header>
            <Nav />
            <SimpleSlider />
        </>
    )
}

export default Home