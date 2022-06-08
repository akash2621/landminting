import { Container , Row , Col } from "react-bootstrap";
import "./MintStyle.css";
import land from "../../assets/images/hero_img.svg";
import logo from "../../assets/images/Common/ecotech_logo.svg";
import minus from "../../assets/images/minus.svg";
import plus from "../../assets/images/plus.svg";

const MintPage = () =>{
    return(
        <>
            <div className="mint_main" >
                <Container>
                    <Row className="align-items-center justify-content-between" >
                        <Col lg={{ order: 'first' , span: 4 }} md={{ order: 'last' , span: 12 }} sm={{ order: 'last' , span: 12 }} xs={{ order: 'last' , span: 12 }} >
                            <div className="mint-image" >
                                <img src={land} alt="mintimage" />
                            </div>
                        </Col>
                        <Col lg={{ order: 'last' , span: 6 }} md={{ order: 'first' , span: 12 }} sm={{ order: 'first' , span: 12 }} xs={{ order: 'first' , span: 12 }} >
                            <div className="mint-box" >
                                <img src={logo} alt="logo" className="mint-logo" />
                                <h5>MINT YOUR LAND</h5>
                                <p>Start minting and claim unique NFT'S!</p>
                                <h6>Wallet ID : </h6>
                                <h3>0/10777</h3>
                                <p className="land-cost" >1 Land Costs 0.1 ETH</p>
                                <div className="claim-land" >
                                    <span><img src={minus} alt="minus" /></span>
                                    <h5>5</h5>
                                    <span><img src={plus} alt="plus" /></span>
                                </div>
                                <button>CLAIM</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default MintPage;