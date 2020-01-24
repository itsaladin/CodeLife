import React, { Component } from 'react'
import {Jumbotron, Button, Container, Row, Col,Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Home.css'
import One from '../1.jpg'
import Two from '../2.jpg'
import Three from '../3.jpg'

export default class Home extends Component {
    render() {
        return (
            <Container>
                <Jumbotron>
                    <h2>Welcome to Simple site</h2>
                    <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-rapper  mt-4">
                        <Image src={One} roundedCircle className="profile-pic" />
                        <h3>Frank</h3>
                        <p>That's a crooked tree. We'll send him to Washington. these little son of a guns hide in your brush and you just have to push them out.Just relax and let it flow. That easy. We'll have a super time.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-rapper  mt-4">
                        <Image src={Two} roundedCircle className="profile-pic" />
                        <h3>Vanessa</h3>
                        <p>That's a crooked tree. We'll send him to Washington. these little son of a guns hide in your brush and you just have to push them out.Just relax and let it flow. That easy. We'll have a super time.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-rapper  mt-4">
                        <Image src={Three} roundedCircle className="profile-pic" />
                        <h3>Riff</h3>
                        <p>That's a crooked tree. We'll send him to Washington. these little son of a guns hide in your brush and you just have to push them out.Just relax and let it flow. That easy. We'll have a super time.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
