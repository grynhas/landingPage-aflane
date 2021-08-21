import styled from 'styled-components'

export const Container = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
    background-color: ${({ theme }) => theme.colors.blazer};
    height: 500px;
    width: 100%;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 10px 5px;
    border-radius: 30px;
`
export const Span = styled.span`
    font-size: 30px;
    padding: 20px 35px;
    margin: 20px;
    color: ${({ theme }) => theme.colors.grey};
    margin: 10px;
    font-family: 'Dancing Script', cursive;
    display: flex;
    align-items: center;
`;
export const Paragrafo = styled.span`
    font-size: 20px;
    margin: 10px 20px;
    font-family: 'Quicksand', sans-serif;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.colors.grey};
`;
export const Figure = styled.figure`
    width: 150px;
    img{
        width: 150px;
    }
`;