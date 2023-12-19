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
  // layout (display: grid/flexbox, position, float, width, height, grid-template-columns/rows, inset)
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  // box model (margin, padding, border, border radius, box sizing, gap, etc.)
  margin-top: 32px;
  padding: 32px 0px 24px;

  // media queries (min-width, max-width, orientation, etc.)
  @media (max-width: 768px) {
    // if on mobile, the viewers will be top to bottom instead of side to side
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  // layout
  position: relative;

  // box model
  padding-top: 56.25%;
  border: 4px solid rgba(249, 249, 249, 0.1);
  border-radius: 12px;

  // visual
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;

  // transform & transition
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);

  // other
  cursor: pointer;
  overflow: hidden;

  img {
    // layout
    display: block;
    position: absolute;
    inset: 0px;
    object-fit: cover;

    // box model
    width: 100%;
    height: 100%;
    opacity: 1;

    // other
    transition: opacity 500ms ease-in-out 0s;
  }
`;

// layout (display: grid/flexbox, position, float, width, height, grid-template-columns/rows, inset)

// box model (margin, padding, border, border radius, box sizing, gap, etc.)

// typography (font-family, font-size, color, line-height, letter-spacing, text-align, etc.)

// background & color (background-color, background image, background-size, color, etc.)

// visual (background, border, box-shadow, text-shadow, opactiy, etc.)

// transform & transition (transform, transition, animation, etc.)

// positioning & z-index (position, z-index, top, right, bottom, left, etc.)

// pseudo-classes & pseudo-elements (hover, active, focus, etc.)

// media queries (min-width, max-width, orientation, etc.)

// other (cursor, overflow, resize, user-select, etc.)

export default Viewers;
