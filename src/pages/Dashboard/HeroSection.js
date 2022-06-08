import { Col, Container, Row } from "react-bootstrap";
import hero from "../../assets/images/hero_img.svg";
import Button from "../../component/Common/Button";

const HeroSection = () =>{
    return(
        <>
            <section className="herosection_main" >
                <Container>
                    <Row className="align-items-center" >
                        <Col lg={{ order: 'first' , span: 6 }} md={{ order: 'last' , span: 12 }}  sm={{ order: 'last' , span: 12 }} xs={{ order: 'last' , span: 12 }} >
                            <div className="hero_content" >
                                <h6>Wonderland</h6>
                                <h3>Welcome to EcoTech <br /> Wonderland</h3>
                                <p>The better way enjoy your world eco retreat & investment </p>
                                <Button 
                                    buttonClassName="Explore"
                                    text="Explore"
                                />
                            </div>
                        </Col>
                        <Col lg={{ order: 'last' , span: 6 }} md={{ order: 'first' , span: 12 }} sm={{ order: 'first' , span: 12 }} xs={{ order: 'first' , span: 12 }} >
                            <div className="hero_image" >
                                <img src={hero} alt="hero_image" width="400" height="auto" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>        
        </>
    );
}

export default HeroSection;