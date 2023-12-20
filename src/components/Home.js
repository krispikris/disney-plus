import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';

import { setMovies } from '../features/movie/movieSlice';
import { selectUserName } from '../features/user/userSlice';

import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Viewers from './Viewers';
import Recommends from './Recommends';
import New from './New';
import Originals from './Originals';
import Trending from './Trending';

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let recommends = [];
  let newToDisney = [];
  let originals = [];
  let trending = [];

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <New />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  display: block;
  min-height: calc(100vh - 250px);
  // padding: 0 calc(3.5vw);

  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;

  &:after {
    position: absolute;
    content: '';

    background: url('/images/02-home/00-home-background.png') center center /
      cover no-repeat fixed;

    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
