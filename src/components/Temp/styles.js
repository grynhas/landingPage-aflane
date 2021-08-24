import styled from 'styled-components'

export const Section = styled.section`
    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.blaze};
    margin-top: 60px;
    figure {
        margin: 5px;
        margin-top: 20px;
        img{
            border-radius: 50%;
            width: 500px;
            height: auto;
            background-color: crimson;
        }
    }
    @media(max-width: 768px){
        flex-direction: column;
            figure {
            margin: 5px;
            
            img{
                border-radius: 50%;
                width: 250px;
                height: auto;
                background-color: crimson;
            }
    }
  }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 50px;
    @media(max-width: 768px){
        font-size:20px;
    }
`;
export const Contato = styled.div`
    width: 400px;
    height: 55px;
    background-color: ${({ theme }) => theme.colors.tertiary};
    font-size: 30px;
    margin: 15px 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
        background-color: ${({ theme }) => theme.colors.primary};
    }
    svg {
        margin: 0 10px;
    }
    @media(max-width: 768px){
        width: 300px;
        height: 50px;
        font-size: 25px;
    }
`
export const Link = styled.a`
    font-size: 30px;
    color: black;
    text-decoration: none;
`