import React from 'react'
import { Form } from "react-bootstrap";
const Input = (props) => {
    return (
        // This is the common function that can be  used accross the files
        <Form.Group>
            <Form.Label>{props.Label}</Form.Label>
            <Form.Control 
            type={props.type} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    )
}

export default Input
