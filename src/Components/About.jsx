import React, { Component } from 'react'
import { Image, Col, Container } from 'react-bootstrap'
import './About.css'
import cover from '../cover.jpg'
import One from '../1.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src={cover} className="header-image" />
                <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src={One} className="about-profile-pic" rounded />
                        <h3>Alauddin Ahmed</h3>

                        <p className='text-success'>I developed many application using Laravel , React JS ,C#.Net MVC (Web form), C# Development , Java Swing (Desktop App) Development.</p>
                        
                        <p>C# ASP.NET (Web-form) application : <span className='text-danger'>ERP based  software 10+ completed.</span></p>
                         <p>Java (Swing) Desktop application :  <span className='text-danger'>Diagnostic Management system, Library management system.</span></p>
                         <p>PHP Laravel : <span className='text-danger'> Ecommerce website developed , Akij Group Job Portal developed.</span></p>
                         <p>Javascript (React.js) :<span className='text-danger'>Portfolio site developed, Programmer problem solution Forum developed.</span> </p>

                        <p>The shadows are just like the highlights, but we're going in the opposite direction. We'll lay all these little funky little things in there. Don't be bashful drop me a line.</p>

                        <p>I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. We artists are a different breed of people. We're a happy bunch. Everyone is going to see things differently - and that's the way it should be. Decide where your cloud lives. Maybe he lives right in here. Trees grow however makes them happy.</p>

                        <p>In this world, everything can be happy. Every highlight needs it's own personal shadow. You can work and carry-on and put lots of little happy things in here.</p>

                        <p>Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. I thought today we would make a happy little stream that's just running through the woods here. With practice comes confidence. Get tough with it, get strong. It's all a game of angles.</p>

                    </Col>
                </Container>
            </div>
        )
    }
}
