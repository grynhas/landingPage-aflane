import { Principal } from './styles'

function Post (props){
    console.log(props)
    return (
    <Principal>
        <h3>{props.dados.title}</h3>
        <img src={props.dados.img.url} />
        <span>{props.dados.article}</span>
        <div>
            <button className='btn btn-success'> Ler mais</button>
        </div>
    </Principal>
    )

} 

export default Post ;