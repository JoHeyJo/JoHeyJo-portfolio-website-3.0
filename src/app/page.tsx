import Banner from "../components/Banner";
import Bio from '../components/Bio';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import { containerStyle, navColStyle, mainColStyle, sectionStyle, rowStyle } from '../styles/ContainerStyles';

export default function App(){
  return (
    <Container fluid style={containerStyle}>
      {/* Header */}
      <header>
        <Row>
          <Col >
            {/* <BrowserRouter> */}
              {/* <TopBanner /> */}
            {/* </BrowserRouter> */}
          </Col>
        </Row>
      </header>

      {/* Main Content */}
      <Row style={rowStyle}>
        {/* Navigation Sidebar (Left) */}
        <Col md={2} className="" style={navColStyle}>
          {/* <BrowserRouter> */}
            {/* <Nav /> */}
          {/* </BrowserRouter> */}
        </Col>

        {/* Main Section */}
        <Col xs={12} md={10} style={mainColStyle}>
          <main id='Home-main-section'>
            <section id="Home-Banner" style={sectionStyle}>
              <Banner />
            </section>
            <section id="Home-Bio" style={sectionStyle}>
              <Bio />
            </section>
            <section id="Home-Portfolio" style={sectionStyle}>
              {/* <Portfolio /> */}
            </section>
            <section id="Home-Contact" style={sectionStyle}>
              <ContactForm />
            </section>
          </main>
        </Col>
      </Row>

      {/* Footer */}
      <Row style={{ position: "absolute", width: "100%" }}>
        {/* <BrowserRouter> */}
          <Footer />
        {/* </BrowserRouter> */}
      </Row>
    </Container>
  );
}