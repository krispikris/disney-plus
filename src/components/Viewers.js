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
        <img src="/images/02-home/02-viewers/04-viewers-star-wars.png" alt="" />
      </Wrap>
      <Wrap>
        <img
          src="/images/02-home/02-viewers/05-viewers-national-geographic.png"
          alt=""
        />
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  margin-top: 32px;
  padding: 32px 0px 24px;

  @media (max-width: 768px) {
    // if on mobile, the viewers will be top to bottom instead of side to side
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  padding-top: 56.25%;
  border: 4px solid rgba(249, 249, 249, 0.1);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: pointer;
  overflow: hidden;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    inset: 0px;
    object-fit: cover;
    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
  }
`;

export default Viewers;
