import { Col, Container, Row } from "react-bootstrap";
import arrivals from "../../assets/images/opportunities/01.svg";
import locations from "../../assets/images/opportunities/02.svg";
import zone from "../../assets/images/opportunities/03.svg";
import development from "../../assets/images/opportunities/04.svg";

const opportunities = () =>{
    const data = [
        {
            id: 1,
            icon: arrivals,
            title: "Growing tourist arrivals",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
            id: 2,
            icon: locations,
            title: "Strategic locations ",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
            id: 3,
            icon: zone,
            title: "Free trade zone",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
        {
            id: 4,
            icon: development,
            title: "New district development plan",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
        },
    ]
    return(
        <>
            <section id="opportunities" className="opportunities_main common" >
                <h5 className="heading text-center" >Opportunities</h5> 
                <Container>
                    <Row className="justify-content-center" >
                        <Col xl={10} lg={12} >
                            <Row>
                                {data.map((d) => (
                                    <Col lg={6} >
                                        <div className="opportunities_content" >
                                            <div className="opportunities_section" >
                                                <img src={d.icon} alt="oppo" />
                                                <h5>{d.title}</h5>
                                            </div>
                                            <p>{d.subtitle}</p>
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default opportunities;