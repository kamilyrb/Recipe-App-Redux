import React, { Component } from 'react'
import { Row, Col,Container } from 'reactstrap'
import CategoryList from '../category/CategoryList';
export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="3">
                            <CategoryList />
                        </Col>
                        <Col xs="9">
                            Test
                    </Col>
                    </Row></Container>
            </div>
        )
    }
}
