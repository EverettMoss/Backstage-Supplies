import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

function Login(){
    return(
        <div>
            <h1>Log In / Sign Up</h1>

            <Form className="col-lg-6 offset-lg-3 ">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    Must be a loyola email.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className="col text-center">
                    <Button variant="success" type="text" className="btn btn-default ">
                    Submit
                </Button>

                </div>
                
            </Form>
        </div>
    )
}

export default Login;