import styled from 'styled-components'

export const Range = styled.section`
    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    display: flex;
    height: 250px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.tertiary};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 15px;
    form {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 100%;
        button {
            height: 40px;
            width: 80%;
            font-size: 20px;
            border: none;
            color: white;
            background-color: #71c4c4;
            padding: 5px 55px;
            text-align: center;
            text-decoration: none;
            font-size: 16px;
            cursor: pointer;
            &:hover {
                background-color: ${({ theme }) => theme.colors.grey};
            }
        }
        input {
            margin-bottom: 5px;
            padding-left: 5px;
            height: 35px;
            font-size: 20px;
            width: 80%;
        }
    }
    @media(max-width: 768px){
        flex-direction : column;
        justify-content: center;
        height: 280px;
        form {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        button {
            margin-top: 5px;
            margin-right: 0;
            padding: 5px 55px;
        }
        input {
            margin-top: 5px;
            margin-right: 0;
            height: 30px;
            font-size: 12px;
        }
    }
  }

`

export const Info = styled.div`
    font-size: 20px;
    margin: 10px;
`;