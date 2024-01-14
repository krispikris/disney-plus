import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import db from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const Detail = (props) => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'movies', id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDetailData(docSnap.data());
      } else {
        console.log('No such document!');
      }
    };

    fetchData();
  }, [id]);

  return (
    <Container>
      <Background>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </Background>

      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>

      <ContentMeta>
        <Controls>
          <Player>
            <img
              // src="/images/00-icons/08-a-control-play-icon-black.png"
              alt=""
            />
            <span>Play</span>
          </Player>

          <Trailer>
            <img
              src="/images/00-icons/08-b-control-play-icon-white.png"
              alt=""
            />
            <span>Trailer</span>
          </Trailer>

          <AddList>
            <span />
            <span />
          </AddList>

          <GroupWatch>
            <div>
              <img src="/images/00-icons/09-control-group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
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

const ImageTitle = styled.div`
  display: flex;
  -webkit-box-pack: start;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 30vw;
  min-height: 160px;

  margin: 0px auto;
  padding-bottom: 24px;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`;

const ContentMeta = styled.div`
  max-width: 874px;
`;

const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  min-height: 56px;
  margin: 24px 0px;
`;

const Player = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;

  margin: 0px 24px 0px 0px;
  padding: 0px 24px;
  border: none;
  border-radius: 4px;

  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.8px;

  background: rgb(249, 249, 249);
  color: rgb(0, 0, 0);

  cursor: pointer;

  img {
    width: 32px;
  }

  &:hover {
    background: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 48px;
    margin: 0px 12px 0px 0px;
    padding: 0px 12px;
    font-size: 12px;

    img {
      width: 24px;
    }
  }
`;

const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    color: rgb(0, 0, 0);

    // img {
    //   background-image: url('/images/00-icons/another-image.png');
    // }
  }
`;

const AddList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  span {
    display: inline-block;
    background-color: rgb(249, 249, 249);

    &:first-child {
      width: 16px;
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
    }

    &:nth-child(2) {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;

const GroupWatch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  cursor: pointer;

  div {
    width: 48px;
    height: 48px;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid white;
    border-radius: 50%;
  }

  img {
    width: 100%;
  }
`;

const SubTitle = styled.div`
  min-height: 20px;
  font-size: 16px;
  color: rgb(249, 249, 249);

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  padding: 16px 0px;
  font-size: 20px;
  color: rgb(249, 249, 249);
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export default Detail;

//   useEffect(() => {
//     if (!currentUser) {
//       navigate('/home');
//     }
//   }, [currentUser, navigate]);
