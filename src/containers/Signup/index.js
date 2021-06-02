import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Input from "../../components/UI/input/index";
import {Redirect} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions';

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const auth = useSelector(state => state.auth);
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const userSignup =(e) =>{

        e.preventDefault();

        const user = {
            firstName,
            lastName,
            email,
            password
        }
        console.log(user);
        dispatch(signup(user));
    }
    
    if (auth.authenticate) {
        return <Redirect to={'/'} />
    }

    if(user.loading){
        return(
            <p> Loading...! </p>
        )
    }

    return (
        <div>
            <Layout>
                <Container>
                    <Row style={{ marginTop: 40 }}>
                        <Col md={{ span: 6, offset: 3 }}>
                            {/* Here span means the width of the column and the offset means the spaces from both the sides. */}
                            <Form onSubmit={userSignup}>
                                <Row>
                                    <Col md={6}>
                                        <Input
                                            Label="First Name"
                                            type='text'
                                            placeholder="First Name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Input
                                            Label="Last Name"
                                            type="text"
                                            placeholder="Last Name"
                                            value={lastName}
                                            onChange={(e) => {setLastName(e.target.value)}}
                                        />
                                    </Col>
                                </Row>
                                <Input
                                    Label="Enter E-mail"
                                    type="email"
                                    placeholder="Enter Email"
                                    value={email}
                                    errorMessage="We'll never share your email with anyone else."
                                    onChange={(e) => {setEmail(e.target.value)}}
                                />

                                <Input
                                    Label="Enter Password"
                                    type="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e) => {setPassword(e.target.value)}}
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

export default Signup
