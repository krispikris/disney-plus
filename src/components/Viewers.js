import styled from 'styled-components';

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src="/images/02-home/02-viewers/01-viewers-disney.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/00-home/01-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/02-home/02-viewers/02-viewers-pixar.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/00-home/02-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/02-home/02-viewers/03-viewers-marvel.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/00-home/03-marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src="/images/02-home/02-viewers/04-viewers-star-wars.png" alt="" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src="/videos/00-home/04-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>

      {/* <Wrap>
        <img
          src="/images/02-home/02-viewers/05-viewers-national-geographic.png"
          alt=""
        />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source
            src="/videos/00-home/05-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap> */}
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
    z-index: 1;
    inset: 0px;
    object-fit: cover;
    opacity: 1;

    top: 0px;
    transition: opacity 500ms ease-in-out 0s;
  }

  video {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    opacity: 0;
    top: 0px;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
