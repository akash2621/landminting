import { Col, Row , Container } from "react-bootstrap";
import eco from "../../assets/images/Eco.svg";
import green from "../../assets/images/Green_Projects.svg";
import nft from "../../assets/images/Nft_Technology.svg";

const Experiance = () =>{
    const data = [
        {
            id: 1,
            experianceimage: eco,
            title: "Eco-Agricultural"
        },
        {
            id: 2,
            experianceimage: green,
            title: "Sustainability Green Projects"
        },
        {
            id: 3,
            experianceimage: nft,
            title: "NFT Technology "
        },
    ]
    return(
        <>
            <section id="experiance" className="experiance_main" >
                <h5 className="heading text-center" >Our Experiance</h5>
                <p className="subheading" >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book.</p>
                <Container>
                <Row className="justify-content-center" >
                    <Col xl={10} >
                        <Row>
                            {data.map((d) => (
                                <Col lg={4} md={6} sm={6} >
                                    <div className="experiance_list" >
                                        <img src={d.experianceimage} alt="eco" width="180" height="auto" />
                                        <h5>{d.title}</h5>
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

export default Experiance;