import styled from 'styled-components'

export const Section = styled.section`
    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    figure {
        margin-bottom: -5px;
        img{
            width: 500px;
            height: 500px;
        }
    }
    @media(max-width: 768px){
        flex-direction: column-reverse;
            figure {
            margin-bottom: -5px;
            img{
                width: 200px;
                height: 200px;
            }
    }
  }
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 50px;
    @media(max-width: 768px){
        font-size:20px;
    }
`;