import styled from 'styled-components'

export const Menu = styled.nav`
    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 5;
    ul {
        list-style: none;
        display: flex;
        justify-content: center;
        padding: 0;
        width: 100%;
        font-family: 'Dancing Script', cursive;
        li {
            display: inline;
            margin-right: 20px;
            cursor: pointer;
            font-size: 30px;
            color: #000;

        }

        li:hover {
            color: ${({ theme }) => theme.colors.blazer};
        }
        li:last-child {
            margin-right: 0px;
        }
    }
    @media(max-width: 768px){
        ul li {
            font-size: 25px;
        }
    }
`
export const Header = styled.header`
    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    position: fixed;
    width: 100%;
    height: auto;
    margin-top: -60px;
    z-index: 999;
`