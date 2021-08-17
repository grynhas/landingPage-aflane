import styled from 'styled-components'

export const Range = styled.section`
    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    display: flex;
    height: 100px;
    width: 100%;
    background-color: pink;
    justify-content: space-around;
    align-items: center;
    form {
        display: flex;
        justify-content: space-between;
        button {
            margin-right: 20px;
            height: 40px;
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
                background-color: #686868;
            }
        }
        input {
            margin-right: 20px;
            height: 35px;
            font-size: 20px;
        }
    }
    @media(max-width: 768px){
        flex-direction : column;
        justify-content: center;
        height: 220px;
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
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 20px;
`;