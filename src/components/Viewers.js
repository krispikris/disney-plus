import styled from 'styled-components';

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/02-home/02-viewers/01-viewers-disney.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/02-home/02-viewers/02-viewers-pixar.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/02-home/02-viewers/03-viewers-marvel.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/02-home/02-viewers/04-viewers-starwars.png" alt="" />
      </Wrap>
      <Wrap>
        <img src="/images/02-home/02-viewers/05-viewers-national.png" alt="" />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 32px;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 32px 0px 24px;

  @media (max-width: 768px) {
    // if on mobile, the viewers will be top to bottom instead of side to side
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 12px;
`;

export default Viewers;
