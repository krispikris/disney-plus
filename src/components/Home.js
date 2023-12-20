import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

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

  useEffect(() => {
    let recommended = [];
    let newToDisney = [];
    let originals = [];
    let trending = [];

    const unsub = onSnapshot(collection(db, 'movies'), (snapshot) => {
      snapshot.docs.map((doc) => {
        console.log('HELLOOOOOOO');
        console.log('RECOMMENDED: ', recommended);
        console.log('NEW: ', newToDisney);
        console.log('ORIGINALS: ', originals);
        console.log('TRENDING: ', trending);

        switch (doc.data().type) {
          case 'recommend':
            recommended = [...recommended, { id: doc.id, ...doc.data() }];
            break;
          case 'new':
            newToDisney = [...newToDisney, { id: doc.id, ...doc.data() }];
            break;
          case 'original':
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case 'trending':
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommended,
          new: newToDisney,
          original: originals,
          trending: trending,
        }),
      );
    });

    return () => unsub(); // Unsubscribe from the snapshot on component unmount
  }, [userName]);

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
