import styled from 'styled-components';
// import { useParams } from 'react-router-dom';

const Detail = (props) => {
  //   const { id } = useParams();

  return (
    <Container>
      <Background>
        <img
          src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/49B92C046117E89BC9243A68EE277A3B30D551D4599F23C10BF0B8C1E90AEFB6/scale?width=1440&aspectRatio=1.78&format=jpeg"
          alt=""
        />
      </Background>
    </Container>
  );
};

const Container = styled.div`
  display: block;
  position: relative;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  top: 72px;
  overflow-x: hidden;
`;

const Background = styled.div`
  position: fixed;
  z-index: -1;
  opacity: 1;
  
  top: 0px;
  right: 0px;
  left: 0px;

  img {
    width: 100vw;
    height: 100vh;

    @media (max-width: 768px) {
      width: initial;
    }
`;

export default Detail;
