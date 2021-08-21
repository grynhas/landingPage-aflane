import styled from 'styled-components'

export const Section = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    height: 100%;
    min-height: 65vh;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    padding: 15px 0;
    span {
        font-size: 35px;
        padding: 20px 50px;
        margin: 20px;
        border-radius: 30px;
        background-color: ${({ theme }) => theme.colors.tertiary};
        color: ${({ theme }) => theme.colors.blazer};
        margin: 10px;
        font-family: 'Dancing Script', cursive;
        display: flex;
        align-items: center;
    }
    h3 {
        font-size: 35px;
        padding: 20px 50px;
        font-family: 'Dancing Script', cursive;
        color: ${({ theme }) => theme.colors.grey};;
    }
    @media(max-width: 768px){
        flex-direction: column;
    }
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    span {
        font-size: 35px;
        padding: 20px 50px;
        margin: 20px;
        border-radius: 30px;
        background-color: ${({ theme }) => theme.colors.tertiary};
        color: ${({ theme }) => theme.colors.blazer}; ;
        margin: 10px;
        font-family: 'Dancing Script', cursive;
        display: flex;
        align-items: center;
    }
    p {
        font-size: 20px;
        margin: 10px 20px;
        font-family: 'Quicksand', sans-serif;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.grey};;
    }
    @media(max-width: 768px){
        font-size:20px;
    }
`;
export const Figure = styled.figure`
    height: 150px;
    img {
        height: 150px; 
    }
`;

