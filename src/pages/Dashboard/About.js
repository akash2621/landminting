import { Col, Container, Row } from "react-bootstrap";
import map from "../../assets/images/asia_pacific.svg";

const About = () =>{
    return(
        <>
            <section id="industry" className="about_main common" >
                <div className="about_main_content" >
                    <Container>
                        <Row>
                            <Col xl={6} >
                                <div className="about_content" >
                                    <h5 className="heading" >The Industry Today</h5>
                                    <p>Asia Pacific has over a population of over 4 billion – more than half of the
                                    world’s total – these newly affluent individuals are looking for affordable
                                    entertainment options. </p>
                                    <p>Rising purchasing power, cheap airfares and political decentralization in 
                                    many countries makes theme parks the next ‘hot spot’ in tourism 
                                    development in Asia.</p>
                                    <p>According to Pricewaterhouse Coopers the Asia Pacific region is the 
                                    second fastest growing region for the entertainment/theme park 
                                    industry in the world.</p>
                                    <p>A study by Euromonitor found that Asia’s theme park industry accounts 
                                    for nearly half of the global market.</p>  
                                </div>
                            </Col>
                            <Col xl={6} >
                                <div className="about_image" >
                                    <img src={map} alt="asia_pacific" width="400" height="auto" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    );
}

export default About;