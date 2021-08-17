import Header from '../src/components/Header'
import Logo from '../src/components/Logo'
import Nav from '../src/components/Nav'
import SimpleSlider from '../src/components/Carrossel'
import Submit from '../src/components/Submit'
import Banner from '../src/components/Banner'


function Home() {
    return(   
        <>
            <Header>
                <Logo />
            </Header>
            <Nav />
            <Banner />
            <Submit />
            <SimpleSlider />
        </>
    )
}

export default Home