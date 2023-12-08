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

const CTA = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 650px;

  border: 1px solid blue;
`;

// const CTA = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   flex-wrap: wrap;
//   align-items: center;
//   text-align: center;

//   width: 100%;
//   max-width: 650px;
//   margin-top: 0;
//   margin-right: auto;
//   margin-left: auto;

//   transition-timing-function: ease-out;
//   transition: opacity 0.2s;

//   border: 1px solid blue;
// `;

const CTALogoOne = styled.img`
  display: block;
  width: 100%;
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
`;

const SignUp = styled.a`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 1.5px;

  color: #f9f9f9;
  background-color: #0063e5;

  width: 100%;
  padding: 16.5px 0;
  margin-bottom: 12px;

  border: 1px solid transparent;
  border-radius: 4px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 12px;
  color: hsla(0, 0%, 95.3%, 1);
  letter-spacing: 1.5px;
  line-height: 1.5;

  margin: 0 0 24px;
  border: 1px solid pink;
`;

const CTALogoTwo = styled.img`
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
  max-width: 600px;
  margin-bottom: 24px;
`;

export default Login;
