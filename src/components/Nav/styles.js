import styled from 'styled-components'

export const Menu = styled.nav`
    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    display: flex;
    height: 50px;
    width: 100%;
    flex-wrap: wrap;
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
            font-size: 25px;
            color: ${({ theme }) => theme.colors.tertiary};
        }
        li:hover {
            color: ${({ theme }) => theme.colors.primary};
        }
        li:last-child {
            margin-right: 0px;;
        }
    }
`