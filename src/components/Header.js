import styled from 'styled-components';
import { auth, provider } from '../firebase';

const Header = (props) => {
  const handleAuth = () => {
    auth
      // .signInWithRedirect(provider)
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <Nav>
      <Logo>
        <img src="../images/00-icons/01-disney-logo.png" alt="" />
      </Logo>
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
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;

  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  padding: 0 36px;

  letter-spacing: 16px;
  z-index: 3;

  background-color: #090b13;
  // border: 1px solid purple;
`;

const Logo = styled.a`
  display: inline-block;
  font-size: 0;

  width: 80px;
  max-height: 70px;
  padding: 0;
  margin-top: 4px;

  img {
    display: block;
    width: 100%;
  }

  // border: 1px solid yellow;
`;

const NavMenu = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;
  align-items: center;

  height: 100%;
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
      white-space: nowrap;
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      color: rgb(249, 249, 249);

      &:before {
        position: absolute;
        content: '';
        background-color: rgb(249, 249, 249);
        opacity: 0;
        border-radius: 0px 0px 4px 4px;

        height: 2px;
        right: 0px;
        bottom: -6px;
        left: 0px;

        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  border: 1px solid #f9f9f9;
  border-radius: 4px;

  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

export default Header;
