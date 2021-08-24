import { Range, Info } from './styles'

function Form (){
    return (
        <Range>
            <Info>
                <span>
                 Agende sua consulta.
                </span>
            </Info>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="email" />
                <input type="fone" placeholder="(00)9000000" />
                <button type="submit" value="Submit"> Enviar </button>
            </form>
        </Range>
    )

} 

export default Form ;