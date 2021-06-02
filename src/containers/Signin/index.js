import React from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/input/index";
import { login } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useState,useEffect } from "react";
import { Redirect } from "react-router-dom";

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const auth = useSelector(state => state.auth);

    //useState() IS THE FUNCTION THAT RETURN AN ARRAY WHICH HAVE TWO ARRGUMENTS ONE IS THE ACTUAL VALUE AND ONT IS THE FUNCTION WHICH CAN SET THE VALUE.

    const dispatch = useDispatch();


    const userLogin = (e) => {

        e.preventDefault();

        const user = {
            email, password
        }

        dispatch(login(user));
        console.log(user);
    }

    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }
    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: 40 }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            {/* Here span means the width of the column and the offset means the spaces from both the sides. */}
                            <Form onSubmit={userLogin}>
                                <Input
                                    Label="E-mail"
                                    placeholder="Enter Email"
                                    value={email}
                                    type="email"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                />

                                <Input
                                    Label="Password"
                                    placeholder="Enter Password"
                                    value={password}
                                    type="password"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                                {/* <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group> */}
                                <Col className="text-center">
                                    <Button variant="primary" type="submit">
                                        Submit
                                </Button>
                                </Col>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </div>
    )
}

export default Signin
