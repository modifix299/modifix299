import React from 'react'
import { useEffect, useState } from 'react';
import { login, reset } from '../../features/auth/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import RegisterModal from './RegisterModal';

const LoginModal = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isError, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    const [loginformData, setLoginformData] = useState({});

    const [loginShow, setLoginShow] = useState(false);

    const handleLoginClose = () => setLoginShow(false);

    const handleLoginShow = () => setLoginShow(true);

    function onLoginFormChange(key, value) {
        setLoginformData({ ...loginformData, [key]: value })
    }

    const handleLogin = () => {
        dispatch(login(loginformData));        
    }

    useEffect(() => {
        if (isError) {
            console.error(message)
        }

        if (isSuccess || user) {
            setLoginShow(false);
            navigate('/')
        }

        dispatch(reset())
    }, [user, isError, isSuccess, message, navigate, dispatch])

    function onClickRegisterModal() {
        setLoginShow(false);
    }


    return (
        <>
            <li>
                <Button style={{color: "black"}} onClick={handleLoginShow} ><i className="fas fa-user"></i></Button>                
            </li>

            <Modal show={loginShow} onHide={handleLoginClose} centered={true}>
                <Modal.Header>
                <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={(e) => onLoginFormChange("email", e.target.value)}  autoFocus/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" onChange={(e) => onLoginFormChange("password", e.target.value)} />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleLoginClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
                </Modal.Footer>
                <RegisterModal onClick={onClickRegisterModal}/>
            </Modal>

            
            
        </>
    )
}

export default LoginModal