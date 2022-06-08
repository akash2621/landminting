import { Col, Container, Row } from "react-bootstrap";
import vision from "../../assets/images/vision_img.svg";

const VisionMission = () =>{
    return(
        <>
            <section id="vision" className="vision_main common" >
                <Container>
                    <Row className="align-items-center" >
                        <Col lg={{ order: 'first' , span: 6 }} md={{ order: 'last' , span: 12 }}  sm={{ order: 'last' , span: 12 }} xs={{ order: 'last' , span: 12 }} >
                            <div className="vision_content" >
                                <h5 className="heading" >Our Vision and Mission</h5> 
                                <div className="vision_content_sub" > 
                                    <h6>Our Vision</h6> 
                                    <p>To become a World class Eco culture Technology Resort  </p>  
                                </div>
                                <div className="vision_content_sub" >
                                    <h6>Our Mission</h6> 
                                    <p>Everyone can own a land <br /> Provide Sustainability food source within our ecosystem <br /> Place for Eco educational & retreat for family, Corporate as
                                    well Senior folks.</p>  
                                </div>
                            </div>
                        </Col>
                        <Col lg={{ order: 'last' , span: 6 }} md={{ order: 'first' , span: 12 }} sm={{ order: 'first' , span: 12 }} xs={{ order: 'first' , span: 12 }} >
                            <div className="vision_image" >
                                <img src={vision} alt="team" width="100%"  height="auto" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default VisionMission;