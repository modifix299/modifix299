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

  function onRegisterFormChange(key, value) {
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
        <Button variant='dark' onClick={handleRegisterShow} >Register</Button>          

        <Modal size="lg" show={registerShow}  onHide={handleRegisterClose} aria-labelledby="example-modal-sizes-title-lg" >
          <Modal.Header>
            <Modal.Title id="example-modal-sizes-title-lg">
              Register
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <div className="form-group">
                <Form.Label for="first-name">First Name:</Form.Label>
                <Form.Control type="text" className="form-control" id="first-name" placeholder="Enter first name" onChange={(e) => onRegisterFormChange("firstname", e.target.value)}/>
              </div>
              <div className="form-group">
                <Form.Label for="last-name">Last Name:</Form.Label>
                <Form.Control type="text" className="form-control" id="last-name" placeholder="Enter last name" onChange={(e) => onRegisterFormChange("lastname", e.target.value)}/>
              </div>
              <div className="form-group">
                <Form.Label for="mobile-number">Mobile Number:</Form.Label>
                <Form.Control type="tel" className="form-control" id="mobile-number" placeholder="Enter mobile number" onChange={(e) => onRegisterFormChange("phone", e.target.value)}/>
              </div>
              <div className="form-group">
                <Form.Label for="email">Email:</Form.Label>
                <Form.Control type="email" className="form-control" id="email" placeholder="Enter email" onChange={(e) => onRegisterFormChange("email", e.target.value)}/>
              </div>
              <div className="form-group">
                <Form.Label for="shipping-address">Shipping Address:</Form.Label>
                <textarea className="form-control" id="shipping-address" rows="3" placeholder="Enter shipping Address" onChange={(e) => onRegisterFormChange("shippingaddress", e.target.value)}></textarea>
              </div>
              <div className="form-group">
                <Form.Label for="zipcode">Zipcode:</Form.Label>
                <Form.Control type="text" className="form-control" id="zipcode" placeholder="Enter zipcode" onChange={(e) => onRegisterFormChange("zipcode", e.target.value)}/>
              </div>
              <div className="form-group">
                <Form.Label for="password">Password:</Form.Label>
                <Form.Control type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e) => onRegisterFormChange("password", e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-dark" onClick={handleRegister}>Register</button>

            </Form>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
        </>
    )
}

export default RegisterModal