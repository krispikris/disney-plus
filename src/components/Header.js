import styled from 'styled-components';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth, provider } from '../firebase';
import {
  setUserLoginDetails,
  setSignOutState,
  selectUserName,
  selectUserPhoto,
} from '../features/user/userSlice';

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  // react hook
  // making sure that, when user is logged in, the home screen is shown
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // if (!user) {
      if (user) {
        setUser(user);
        navigate('/home');
      }
    });
  }, [userName]);

  const handleLogin = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      signOut(auth, provider).then(() => {
        dispatch(setSignOutState());
        navigate('/');
      });
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      }),
    );
  };

  return (
    <Nav>
      <Logo>
        <a href="/home">
          <img
            onClick="/home"
            src="../images/00-icons/01-disney-logo.png"
            alt=""
          />
        </a>
      </Logo>
      {!userName ? (
        <Login onClick={handleLogin}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="../images/00-icons/02-nav-home-icon.svg" alt="" />
              <span>HOME</span>
            </a>

            <a href="/search">
              <img src="../images/00-icons/03-nav-search-icon.svg" alt="" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="../images/00-icons/04-nav-watchlist-icon.svg" alt="" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="../images/00-icons/05-nav-originals-icon.svg" alt="" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="../images/00-icons/06-nav-movies-icon.svg" alt="" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="../images/00-icons/07-nav-series-icon.svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <SignOut>
            <UserImg src={userPhoto} alt={userName} />
            <Dropdown>
              <span onClick={handleLogin}>Sign Out</span>
            </Dropdown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  height: 70px;
  z-index: 3;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 36px;
  letter-spacing: 16px;
  background-color: #090b13;

  top: 0;
  right: 0;
  left: 0;
`;

const Logo = styled.a`
  display: inline-block;
  width: 80px;
  max-height: 70px;
  margin-top: 4px;
  padding: 0;
  font-size: 0;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  position: relative;
  height: 100%;

  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  align-items: center;

  margin: 0px;
  margin-right: auto;
  margin-left: 24px;
  padding: 0px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      width: 20px;
      min-width: 20px;
      z-index: auto;
    }

    span {
      position: relative;
      padding: 2px 0px;

      font-size: 13px;
      color: rgb(249, 249, 249);
      line-height: 1.08;
      letter-spacing: 1.42px;
      white-space: nowrap;

      &:before {
        position: absolute;
        width: auto;
        height: 2px;

        border-radius: 0px 0px 4px 4px;
        background-color: rgb(249, 249, 249);

        opacity: 0;
        visibility: hidden;

        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;

        right: 0px;
        bottom: -6px;
        left: 0px;

        content: '';
      }
    }

    &:hover {
      span:before {
        opacity: 1 !important;
        visibility: visible;
        transform: scaleX(1);
      }
    }
  }
`;

const Login = styled.a`
  padding: 8px 16px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;

  letter-spacing: 1.5px;
  text-transform: uppercase;

  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;

  &:hover {
    color: #000;
    border-color: transparent;
    background-color: #f9f9f9;
  }
`;

const UserImg = styled.img`
  height: 100%;
`;

const Dropdown = styled.div`
  position: absolute;
  width: 120px;

  display: flex;
  justify-content: center;

  font-size: 14px;
  letter-spacing: 3px;

  padding: 10px;
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;

  background-color: rgba(19, 19, 19, 0.8);
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  opacity: 0;

  top: 56px;
  right: 0px;
`;

const SignOut = styled.div`
  position: relative;
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${UserImg} {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    ${Dropdown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
