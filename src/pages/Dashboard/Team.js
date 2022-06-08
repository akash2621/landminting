import { Col, Container, Row } from "react-bootstrap";
import team from "../../assets/images/team.svg";

const Team = () =>{
    return(
        <>
            <section id="management" className="team_main common" >
                <Container>
                    <Row>
                        <Col lg={6} >
                            <div className="team_image" >
                                <img src={team} alt="team" width="400" height="auto" />
                            </div>
                        </Col>
                        <Col lg={6} >
                            <div className="team_content" >
                                <h5 className="heading" >Our Management Team</h5>  
                                <p>With 20 years of experience in F&B, MICE, Hotel, Attractions, Travel & Tourism
sectors. A strong passion for the tourism and hospitality industry. </p>  
                                <p>Proven track record of developing and implementing business strategies. 
Sharing knowledge and expertise in a highly professional manner.</p>
                                <p>Decision making in a pressured, commercial driven environment. Dynamic 
sales & marketing driver.</p>
                                <p> Adapt in getting task done, both efficient & fast executor. Diana founded 
Royal Wings Travel, Royal Capital Holding & Pony Tale</p>
                                <h6>Diana Ho –Founder </h6>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Team;