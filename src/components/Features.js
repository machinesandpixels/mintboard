import React, { Fragment } from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Features = () => {
    return (
        <Fragment>
            <Row>
              <Col>
                <h1 className="gradient--text">
                  Features
                </h1>
              </Col>
            </Row>
            
            <Row className="gradient--bg">
              <Col className="mt-5 mb-5">
              <Row className="mb-5">
              <Col  className="d-flex justify-content-around mt-5">
                <div 
                    style={{ width: '780px' }} 
                    className="d-flex justify-content-around"
                  > 
                  <div className="align-self-center"> 
                    <h1> Express Yourself </h1> 
                  </div>
                  <div> 
                    <Image src="https://imgr.search.brave.com/5sH5KI0ukbsFd2hNklHSMjsBsbnhRX5YcPeNgsnM3k8/fit/736/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/emhHZGhRSTY5REVo/a0picThydTFBSGFF/eCZwaWQ9QXBp" rounded /> 
                  </div>
                </div>
              </Col>
              </Row>

              <Row className="mb-5">
              <Col  className="d-flex justify-content-around">
                <div 
                    style={{ width: '780px' }} 
                    className="d-flex justify-content-around"
                  > 
                  <div> 
                    <Image className="mr-5" src="https://imgr.search.brave.com/5sH5KI0ukbsFd2hNklHSMjsBsbnhRX5YcPeNgsnM3k8/fit/736/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/emhHZGhRSTY5REVo/a0picThydTFBSGFF/eCZwaWQ9QXBp" rounded /> 
                  </div>
                  <div className="align-self-center"> 
                    <h1>Change Your Mind</h1> 
                  </div>
                </div>
              </Col>
              </Row>
          
              <Row>
              <Col  className="d-flex justify-content-around mb-5">
                <div 
                    style={{ width: '780px' }} 
                    className="d-flex justify-content-around"
                  > 
                  <div className="align-self-center"> 
                    <h1> Even Choose A Color </h1> 
                  </div>
                  <div> 
                    <Image src="https://imgr.search.brave.com/5sH5KI0ukbsFd2hNklHSMjsBsbnhRX5YcPeNgsnM3k8/fit/736/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/emhHZGhRSTY5REVo/a0picThydTFBSGFF/eCZwaWQ9QXBp" rounded /> 
                  </div>
                </div>
              </Col>
              </Row>
              </Col>
            </Row>
        </Fragment>
    )
}

export default Features;
