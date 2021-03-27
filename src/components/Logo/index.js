import styled from 'styled-components'

const LogoDiv = styled.div`
  display: flex;
  background-image: url('/img/logoPadrao.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  height: 250px;
  width:500px;
  @media(max-width: 768px){
    height: 200px;
    width: 300px;
  }
`;


export default LogoDiv;