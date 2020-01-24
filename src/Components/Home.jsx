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
                    <h2>Welcome to our CodeLife family</h2>
                    <p>“Your time is limited, so don’t waste it living someone else’s life.” ― Steve Jobs</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-rapper  mt-4">
                        <Image src={One} roundedCircle className="profile-pic" />
                        <h3 className='pt-3 '>Alauddin Ahmed</h3>
                        <h5 className='text-success pb-2'>CEO (CodeLife)</h5>
                        <p>I developed many application using Laravel , React JS ,C#.Net MVC (Web form), C# Development , Java Swing (Desktop App) Development.</p>
                        <p> The application which I have developed includes work like City Classified, Event Calendars, Web Portals, Online Exam, Handling AWS services, ERP Development.</p>
                    </Col>
                    <Col xs={12} sm={4} className="person-rapper  mt-4">
                        <Image src={Two} roundedCircle className="profile-pic" />
                        <h3 className='pt-3 pb-2'>MD Bahauddin Khan</h3>
                        <h5 className='text-success pb-2'>Business Development (CodeLife)</h5>
                        <p>A business development executive is a senior manager tasked with the job of CodeLife business grow and therefore, they are high-level sales professionals.</p>
                        <p className='text-success'>Co-Founder : <a href="https://www.facebook.com/pages/%E0%A6%AC%E0%A6%BE%E0%A6%97%E0%A6%BE%E0%A6%A8%E0%A6%AC%E0%A6%BE%E0%A7%9C%E0%A7%80-%E0%A6%B0%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A7%8B%E0%A6%81%E0%A6%B0%E0%A6%BE-Baganbari-Restora/414869155372994" target="_blank">Baganbari Restaurant, Banasree</a> </p>
                        <p className='text-success'>Founder : <a href="https://www.facebook.com/aandbf" target="_blank">A&B Fashion , 1282, Shahjala Plaza,Begun Rokeya Sarani Mirpur-10, Dhaka-1216</a> </p>
                    </Col>
                    <Col xs={12} sm={4} className="person-rapper  mt-4">
                        <Image src={Three} roundedCircle className="profile-pic" />
                        <h3 className='pt-3 pb-2'>Foyez Ahmed</h3>
                        <h5 className='text-success pb-2'>CTO (CodeLife)</h5>
                        <p>We are looking for a Chief Technology Officer (CTO) to provide sound technical leadership in all aspects of our business. You will communicate with employees, stakeholders and customers to ensure our company’s technologies are used appropriately.</p>
                        <p>Expertise Python , Data Science related field</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
