import { Col, Container, Row } from "react-bootstrap";
import roadmap from "../../assets/images/roadmap_img.svg";

const Roadmap = () =>{
    return(
        <>
            <div id="roadmap" className="roadmap_main common" >
                <h5 className="heading text-center" >Roadmap</h5> 
                <Container>
                    <Row>
                        <Col xl={6} >
                            <div className="roadmap_img" >
                                <img width="400" height="auto" src={roadmap} alt="roadmapimg" />
                            </div>
                        </Col>
                        <Col xl={6} >
                            <div className="roadmap_content" >
                                <div className="phase" >
                                    <h5>Phase 1</h5>
                                    <h6>What is NFT ? </h6>
                                    <p>A non-fungible token (NFT) is a non-interchangeable unit of data stored on a 
                                    blockchain, a form of digital ledger , which can be sold and traded.</p>
                                    <p>Through our digital platform (DigiGuru), Commercial land shares can be 
                                    digitized and issued as tokens on the blockchain. A digital share certificate 
                                    will be stored within each token. Each token will represent one share in our 
                                    Digital share. We will ensure that only whitelisted, verified and approved 
                                    investors can buy tokens.</p>
                                    <p>Ethereum or Bitcoin will be use to support token  transaction with the platform between Buyer and Seller.</p>
                                    <p>Digital contract agreement with number of tokens will be issues in our platform </p>
                                    <h6>Benefits :</h6>
                                    <p>Immediate trading and settlement ,increased access to international investors</p>
                                    <p>Easier access to buy and invest ,24/7 trading</p>
                                    <p>20,000 Sqm will turn in to NFT and to be available for investment in our Digiguru.</p>
                                    <p>10,000 digital tokens will be release at $350 USD/token (phase 1)</p>
                                </div>
                                <div className="phase" >
                                    <h5>Phase 2</h5>
                                    <p>Another 10,000 sqm will be release at $500 USD (phase 2) per sqm</p>
                                </div>
                                <div className="phase" >
                                    <h5>Phase 3</h5>
                                    <p>Some basic infrastructure will be built example Restaurants, Retail mall ,High tech Agricultural park. </p>
                                    <p>Another 10,000 token to release for infrastructure building etc </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Roadmap;