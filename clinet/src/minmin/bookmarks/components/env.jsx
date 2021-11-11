import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container, Carousel, Table } from 'react-bootstrap';

class Env extends React.Component {
    render() {
        const { env } = this.props;
        return <div>
            &nbsp;
            <Table striped bordered hover variant="warning">
                <thead className='table-sm'>
                    <tr>
                        <th>店鋪詳細資訊</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            適合:{env[0].customer_base}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            最低消費:{env[0].minimum_order}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            服務費:{env[0].service_charge}
                        </td>

                    </tr>
                    <tr>
                        <td>
                            付款方式:{env[0].pay_method}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            可否吸菸:{env[0].cigarette}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            停車場:{env[0].parking}
                        </td>

                    </tr>

                </tbody>
            </Table>

        </div>
    }
}

export default Env