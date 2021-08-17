import { Range, Info } from './styles'

function Nav (){
    return (
        <Range>
            <Info>
                <span>
                    Lorem ipsum dolor sit amet
                    Pariatur, consequatur ullam!
                </span>
            </Info>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="email" />
                <button type="submit" value="Submit"> Enviar </button>
            </form>
        </Range>
    )

} 

export default Nav ;