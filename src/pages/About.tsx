import styled, { ThemeProvider } from "styled-components";
import { theme } from "../theme";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${(props) => props.theme.space.lg};
  max-width: 1000px;
  margin: 0 auto;
  width: 100%;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PageTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: 800;
  margin-bottom: ${(props) => props.theme.space.lg};
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 700;
  color: ${(props) => props.theme.colors.primaryDark};
  margin-top: ${(props) => props.theme.space.xl};
  margin-bottom: ${(props) => props.theme.space.md};
`;

const Paragraph = styled.p`
  margin-bottom: ${(props) => props.theme.space.md};
  line-height: 1.8;
  color: ${(props) => props.theme.colors.gray};
  font-size: ${(props) => props.theme.fontSizes.small};
`;



const About = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
      <AppContainer>
        <MainContent>
          <PageTitle>About FreshPick</PageTitle>

          <Paragraph>
            At FreshPick, we are redefining the grocery shopping experience by
            combining smart technology with a passion for healthy, personalized
            living. Founded in 2025, our goal is to empower individuals to make
            better food choices effortlessly—right from their screens to their
            kitchens.
          </Paragraph>

          <SectionTitle>Our Mission</SectionTitle>
          <Paragraph>
            Our mission is to revolutionize the way people shop for groceries by
            offering intelligent, customized recommendations that cater to every
            lifestyle. Whether you're following a specific diet, have food
            sensitivities, or simply want to eat cleaner and smarter,
            FreshGrocer helps you discover the best products suited to your
            unique needs. We believe access to quality, nutritious food is a
            right—not a privilege.
          </Paragraph>

          <SectionTitle>Our Vision</SectionTitle>
          <Paragraph>
            To become the leading digital platform that empowers millions to
            make informed grocery choices with confidence and convenience. We
            aim to bridge the gap between health-conscious consumers and
            trustworthy food sources, fostering a future where every household
            enjoys nutritious meals tailored to their lifestyle.
          </Paragraph>

          <SectionTitle>How It Works</SectionTitle>
          <Paragraph>
            Powered by an advanced recommendation engine, FreshPick analyzes
            your taste preferences, past shopping behavior, and dietary
            requirements to suggest personalized product options. By
            collaborating with trusted local farmers and ethical suppliers, we
            bring fresh, high-quality goods to your doorstep—while promoting
            sustainability and supporting small businesses across the country.
          </Paragraph>


          <SectionTitle>Join Us</SectionTitle>
          <Paragraph>
            We're always looking for passionate individuals to join our mission
            of making healthy eating accessible to everyone. If you're
            interested in joining our team, please visit our careers page or
            reach out via our contact form.
          </Paragraph>
        </MainContent>

        {/* <Footer /> */}
      </AppContainer>
    </ThemeProvider>
  );
};

export default About;
