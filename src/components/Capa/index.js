import styled from 'styled-components'

const CapaDiv = styled.div`
  background-image: url('/img/capa.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  height: 312px;
  width: 100%;
  @media(max-width: 768px){
    height: 200px;
    width: 100%;
  }
`;


export default CapaDiv;