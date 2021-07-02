import React from 'react'
import Header from "../header/index";
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import "./Style.css"

const Layout = (props) => {
    return (
        <>
            {/* here the props.children is fectching the components from the Layout That are given in the home index file */}
            <Header />
            {
                /* To Create the Side Bar */
                props.sidebar ?
                    (<Container fluid>
                        <Row>
                            <Col md={2} className="sidebar">
                                <ul>
                                    <li><NavLink to={'/'}> Home </NavLink></li>
                                    <li><NavLink to={'/products'}>Products</NavLink></li>
                                    <li><NavLink to={'/orders'}>Orders</NavLink></li>
                                    <li><NavLink to={'/category'}>Category</NavLink></li>
                                </ul>
                            </Col>
                            <Col md={{offset:2}}>{props.children}</Col>
                        </Row>
                    </Container>)
                    :
                    props.children
            }
        </>
    )
}

export default Layout;
