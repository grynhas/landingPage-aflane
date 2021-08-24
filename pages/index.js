import Nav from '../src/components/Nav'
import Submit from '../src/components/Submit'
import Banner from '../src/components/Banner'
import QuemSou from '../src/components/QuemSou'
import TerapiaOn from '../src/components/TerapiaOn'
import Frase from '../src/components/Frase'
import Cards from '../src/components/Cards'
import Card from '../src/components/Card'


function Home() {
    return(   
        <>
            <Nav />
            <Banner />
            <Frase />
            <QuemSou />
            <Cards>
                <Card 
                    title='Ansiedade'
                    paragrafo='liste 3 situações da sua vida que você precise impor limites ou encerrar.' 
                    img='card_1.png' 
                    alt='Ansiedade'
                />
                <Card 
                    title='Saúde Emocional'
                    paragrafo='liste 3 situações que estão no seu planejamento para você começar nesta semana.' 
                    img='card_2.png' 
                    alt='Saúde Emocional'
                />
                <Card 
                    title='Depressão'
                    paragrafo='liste 3 situações que você precisa se dedicar mais para alcançar seus objetivos.' 
                    img='card_3.png' 
                    alt='Depressão'
                />
                <Card 
                    title='Auto conhecimento'
                    paragrafo='liste 3 situações que estão no seu planejamento para você começar nesta semana.' 
                    img='card_4.png' 
                    alt='Auto conhecimento'
                />
                <Card 
                    title='Dependência Química'
                    paragrafo='liste 3 situações que você precisa se dedicar mais para alcançar seus objetivos.' 
                    img='card_5.png' 
                    alt='Dependência Química'
                />
            </Cards>
            <TerapiaOn />
            <Submit />
        </>
    )
}

export default Home