import styled from 'styled-components'

const Header = styled.header`
    background: ${({ theme }) => theme.colors.primary};
    height: 30vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default Header;