import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Carousel } from 'react-bootstrap';
import Food from './icon/food.png';

import './user.css'
class Carouselpic extends React.Component {
    render() {
        const { menu } = this.props;
        return <div  >
            <Carousel variant="dark"  >
                {menu.map((menu) => {
                    return (
                        <Carousel.Item>
                            <img className="d-block w-100 "
                                src={menu.img_path}
                                alt={menu.img_description}
                                width='auto'
                                height='450px'
                            />
                            <Carousel.Caption>
                                <h5 style={{ color: "white" }}>{menu.img_description}</h5>
                            </Carousel.Caption>
                        </Carousel.Item>)
                })}
            </Carousel>
        </div>;
    }
}

export default Carouselpic;