import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/01-splash/01-cta-logo-one.svg" alt="" />
          {/* <CTALogoOne src="/images/01-splash/01-cta-logo-one.png" alt="" /> */}
          <SignUp>GET ALL THERE</SignUp>
          <Description>
            Get Premier Access to epic entertainment from Hulu, Disney+, and
            ESPN+ with a Disney Bundle.
          </Description>
          <CTALogoTwo src="/images/01-splash/02-cta-logo-two.png" alt="" />
        </CTA>
        <SplashBackground />
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-bottom: 10vw;
  padding: 80px 40px;
  box-sizing: border-box;
`;

const SplashBackground = styled.div`
  position: absolute;
  height: 100%;
  z-index: -1;

  background-image: url('/images/01-splash/00-login-background.jpg');
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 650px;
`;

const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
`;

const SignUp = styled.a`
  width: 100%;
  margin-bottom: 12px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  border-radius: 4px;

  font-size: 18px;
  font-weight: bold;
  color: #f9f9f9;
  letter-spacing: 1.5px;
  background-color: #0063e5;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 12px;
  color: hsla(0, 0%, 95.3%, 1);
  line-height: 1.5;
  letter-spacing: 1.5px;

  margin: 0 0 24px;
  // border: 1px solid pink;
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  width: 100%;
  max-width: 600px;
  vertical-align: bottom;
  margin-bottom: 24px;
`;

export default Login;
