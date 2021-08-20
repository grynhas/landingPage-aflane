import styled from 'styled-components'

export const Principal = styled.article`

    /* background-color: ${(props)=> props.corDeFundo ? 'red' : 'BLUE'}; */
    display: flex;
    height: auto;
    width: 100%;
    max-width: 500px;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-start;
    background-color: #FFF;
    border-radius: 35px;
    margin: 25px 25px 0 0;
    h3 {
        font-size: larger;
    }
    img {
        padding: 0;
        width: 300px;
        height: 300px;
    }
    span {
        margin: 10px 20px;
        height: 100%;
        font-size: larger;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    div {
        height: auto;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .btn {
            border: none;
            padding: 10px;
            text-decoration: none;
            cursor: pointer;
            transition: background .3s;
            border-radius: 5px;
            margin: 10px 50px;
        }
        .btn-success {
            background-color: rgb(75, 200, 138);
            outline: none;
            color:rgb(27, 66, 50)
        }

        .btn-success:hover {
            background-color:  rgb(116, 158, 137);
        }

        .btn-success:active {
            color:rgb(75, 200, 138);
            background-color: rgb(27, 66, 50);
        }
    }
`