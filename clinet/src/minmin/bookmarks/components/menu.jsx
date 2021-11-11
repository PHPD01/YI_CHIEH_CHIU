import React, { Component } from 'react';
import Carouselpic from './menucarousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import Mpic from './icon/mpic.png';




class Menu extends React.Component {
    render() {
        const { menu } = this.props;
        return <div>
            &nbsp;
            <Container fluid>
                <Row>
                    <Col xs={12} xl={6}>
                        <Carouselpic menu={menu} />
                    </Col>

                    {/* <Col xs={12} xl={7}  >

                        {menu.map((pic) => {
                            return <img className='h-75 border w-100' src={pic.img_path} />
                        })}

                    </Col> */}


                </Row>

                <Row>

                </Row>

            </Container>


        </div>
    }
}

export default Menu