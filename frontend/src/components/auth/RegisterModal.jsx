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
              Large Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>

            </Form>
          </Modal.Body>
          <Modal.Footer>

          </Modal.Footer>
        </Modal>
        </>
    )
}

export default RegisterModal