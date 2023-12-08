import styled from 'styled-components';

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="../images/00-icons/01-disney-logo.png" alt="" />
      </Logo>
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
  border: 1px solid purple;
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

  border: 1px solid yellow;
`;

export default Header;
