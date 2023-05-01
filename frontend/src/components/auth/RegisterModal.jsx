import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../../features/auth/authSlice';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const RegisterModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
      (state) => state.auth
  )

  const [registerformData, setRegisterformData] = useState({});

  const [registerShow, setRegisterShow] = useState(false);

  const handleRegisterClose = () => setRegisterShow(false);

  const handleRegisterShow = () => setRegisterShow(true);

  function onLoginFormChange(key, value) {
    setRegisterformData({ ...registerformData, [key]: value })
}

const handleRegister = () => {
    dispatch(register(registerformData));        
}

  useEffect(() => {
    if (isError) {
        console.error(message)
    }

    if (isSuccess || user) {
        setRegisterShow(false);
        navigate('/')
    }

    dispatch(reset())
}, [user, isError, isSuccess, message, navigate, dispatch])

    return (
        <>
        <Button variant='primary' onClick={handleRegisterShow} >Register</Button>          

        <Modal size="lg" show={registerShow}  onHide={handleRegisterClose} aria-labelledby="example-modal-sizes-title-lg" >
          <Modal.Header>
            <Modal.Title id="example-modal-sizes-title-lg">
              Register
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div class="form-group">
                <Form.Label for="first-name">First Name:</Form.Label>
                <Form.Control type="text" class="form-control" id="first-name" placeholder="Enter first name"/>
              </div>
              <div class="form-group">
                <Form.Label for="last-name">Last Name:</Form.Label>
                <Form.Control type="text" class="form-control" id="last-name" placeholder="Enter last name"/>
              </div>
              <div class="form-group">
                <Form.Label for="mobile-number">Mobile Number:</Form.Label>
                <Form.Control type="tel" class="form-control" id="mobile-number" placeholder="Enter mobile number"/>
              </div>
              <div class="form-group">
                <Form.Label for="email">Email:</Form.Label>
                <Form.Control type="email" class="form-control" id="email" placeholder="Enter email"/>
              </div>
              <div class="form-group">
                <Form.Label for="shipping-address">Shipping Address:</Form.Label>
                <textarea class="form-control" id="shipping-address" rows="3"></textarea>
              </div>
              <div class="form-group">
                <Form.Label for="city">City:</Form.Label>
                <Form.Control type="text" class="form-control" id="city" placeholder="Enter city"/>
              </div>
              <div class="form-group">
                <Form.Label for="zipcode">Zipcode:</Form.Label>
                <Form.Control type="text" class="form-control" id="zipcode" placeholder="Enter zipcode"/>
              </div>
              <div class="form-group">
                <Form.Label for="password">Password:</Form.Label>
                <Form.Control type="password" class="form-control" id="password" placeholder="Enter password"/>
              </div>
              <button type="submit" class="btn btn-primary" onClick={handleRegister}>Register</button>

            </Form>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
        </>
    )
}

export default RegisterModal