import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectRecommend } from '../features/movie/movieSlice';

const Recommends = (props) => {
  const movies = useSelector(selectRecommend);

  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt="" />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 28px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  gap: 24px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 32px;

  @media (max-width: 768px) {
    // if on mobile, the viewers will be top to bottom instead of side to side
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  position: relative;
  padding-top: 56.25%;

  border: 4px solid rgba(249, 249, 249, 0.1);
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px;

  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor: pointer;
  overflow: hidden;

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    inset: 0px;
    z-index: 1;
    object-fit: cover;

    opacity: 1;
    transition: opacity 500ms ease-in-out 0s;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
export default Recommends;
