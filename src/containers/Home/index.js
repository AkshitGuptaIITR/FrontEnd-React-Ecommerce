import React from 'react'
import Layout from '../../components/Layout'
import { Jumbotron } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Row, Col } from 'react-bootstrap';
import "./style.css";
import { NavLink } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <Layout sidebar>
                {/* What ever compenent is added in the layout will behave like the prop which can be called as the props.children */}
                
            </Layout>
        </div>
    )
}

export default Home
