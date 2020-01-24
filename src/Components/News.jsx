import React, { Component } from 'react'
import { Container, Col, Image, Row } from 'react-bootstrap'
import './News.css'
import Cover2 from '../cover2.jpg'
import Cover from '../cover.jpg'

export default class News extends Component {
    render() {
        return (
            <div>
                <Image src={Cover2} className="header-image" />
                <Container>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                        <p>Just relax and let it flow. That easy. We'll have a super time. You have to allow the paint to break to make it beautiful. If it's not what you want - stop and change it. Don't just keep going and expect it will get better. Nice little clouds playing around in the sky. Nature is so fantastic, enjoy it. Let it make you happy.</p>

                        <p>The shadows are just like the highlights, but we're going in the opposite direction. We'll lay all these little funky little things in there. Don't be bashful drop me a line.</p>

                        <p>I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. We artists are a different breed of people. We're a happy bunch. Everyone is going to see things differently - and that's the way it should be. Decide where your cloud lives. Maybe he lives right in here. Trees grow however makes them happy.</p>

                        <p>In this world, everything can be happy. Every highlight needs it's own personal shadow. You can work and carry-on and put lots of little happy things in here.</p>

                        <p>Almost everything is going to happen for you automatically - you don't have to spend any time working or worrying. I thought today we would make a happy little stream that's just running through the woods here. With practice comes confidence. Get tough with it, get strong. It's all a game of angles.</p>

                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                            <Image src={Cover} />
                            <p>I'm going to mix up a little color. We’ll use Van Dyke Brown, Permanent Red, and a little bit of Prussian Blue. Every single thing in the world has its own personality - and it is up to you to make friends with the little rascals. We artists are a different breed of people. We're a happy bunch. Everyone is going to see things differently - and that's the way it should be. Decide where your cloud lives. Maybe he lives right in here. Trees grow however makes them happy.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
