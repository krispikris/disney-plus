import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        {/* <CTA>
          <CTALogoOne src="/images/01-splash/01-cta-logo.svg" alt="" />
        </CTA> */}
        <SplashBackground />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;

  border: 1px solid red;
`;

const SplashBackground = styled.div`
  background-image: url('/images/01-splash/00-login-background.jpg');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  position: absolute;
  height: 100%;
  z-index: -1;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

// const CTA = styled.div``;

// const CTALogoOne = styled.img``;

export default Login;
