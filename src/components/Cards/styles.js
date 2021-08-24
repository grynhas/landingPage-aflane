import styled from 'styled-components'

export const Section = styled.section`
    @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
    background-color: ${({ theme }) => theme.colors.primary};
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    padding: 15px 0;
`

export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    p {
        font-size: 20px;
        margin: 10px 20px;
        font-family: 'Quicksand', sans-serif;
        letter-spacing: 1px;
        color: ${({ theme }) => theme.colors.grey};;
    }
    @media(max-width: 768px){
        font-size:20px;
        flex-direction: column;
        margin: 5px 10px;
    }
`;
export const Title = styled.div`
    background-image: url('/img/titleImg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    width: 100%;
    height: auto;
    span {
        font-size: 40px;
        padding: 25px 50px;
        margin: 20px;
        border-radius: 30px;
        color: ${({ theme }) => theme.colors.blazer}; ;
        margin: 10px;
        font-family: 'Dancing Script', cursive;
        display: flex;
        justify-content: center;
        align-items: center;
        }
`;