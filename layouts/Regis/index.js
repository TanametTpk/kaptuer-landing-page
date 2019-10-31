import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { Form, Button, Row, Col, Container, Modal } from 'react-bootstrap'
import Loader from '../../components/Loader'

import { FB_TOKEN, GOOGLE_TOKEN } from '../../configs/oauth'
import api from '../../util/api'
import API from '../../configs/apis'
import signable from '../../util/api/libs/signable'
import { useFormHandle, useModal } from '../../util/hooks'
import {SeperateLine} from '../../components/SeperateLine'
import Validator from '../../util/api/libs/passwordValidator'

import Link from 'next/link'

function Regis() {

  const [user, handleFormChange] = useFormHandle({
    name: "",
    email: "",
    password: "",
  });

  const [ showModal, openModal, closeModal ] = useModal(false)

  const [isLoad, setLoad] = useState(false)
  const [isClickSignup, setClickSignup] = useState(false)

  const registration = async (payload, method) => {

    setClickSignup(true)
    if (payload.password !== payload.confirmpassword || !payload.name || !payload.email) return

    if (!Validator.validate(payload.password)) {
      openModal()
      return
    }

    let res = await api.user.createUser(signable[method](payload))
    if (res.status === 200) {

      login(payload, method)

    } else {
      //something happen
    }
  }

  const login = async (payload, method) => {

    let res = await api.user.login(signable[method](payload), (err) => console.log(err))
    if (res.status === 200){
      window.location.href = API.APP;
      setLoad(true)
    }

  }

  if (isLoad) return <Loader />

  return (
    <Container className="login-box">
      <Row style={{ minWidth: "35%" }}>
        <Col sm={12}>
          <Form className="mx-3">
            <Form.Group controlId="formBasicName">
              <Form.Label>Your name</Form.Label>
              <Form.Control isInvalid={ isClickSignup && !user.name} type="text" name="name" value={user.name} onChange={handleFormChange} placeholder="Enter name" />
              <Form.Control.Feedback type="invalid">
                please enter name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control isInvalid={ isClickSignup && !user.email} type="email" name="email" value={user.email} onChange={handleFormChange} placeholder="Enter email" />
              <Form.Control.Feedback type="invalid">
                please enter email
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control isInvalid={ isClickSignup && user.confirmpassword && user.confirmpassword !== user.password} type="password" name="password" value={user.password} onChange={handleFormChange} placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control isInvalid={ isClickSignup && user.confirmpassword && user.confirmpassword !== user.password} type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleFormChange} placeholder="Confirm Password" />
              <Form.Control.Feedback type="invalid">
                password is not matched
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
          <Row>
            <Col className="d-flex flex-column">
              <Button className="mx-3 mb-2" onClick={() => registration(user, "LocalSign")}>signup</Button>
              <Link href="/"><Button variant="outline-primary" className="mx-3 mb-2" >back to login</Button></Link>
              <SeperateLine style={{margin:" 12px 0"}} />
              <FacebookLogin
                appId={FB_TOKEN}
                autoLoad={false}
                fields="name,email,picture"
                callback={(response) => login(response, "FacebookSign")}
                render={renderProps => (
                  <Button variant="facebook" className="mx-3 mb-2" onClick={renderProps.onClick}>login with Facebook</Button>
                )}
              />
              <GoogleLogin
                clientId={GOOGLE_TOKEN}
                buttonText="Login with google"
                onSuccess={(response) => login(response, "GoogleSign")}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                  <Button variant="light" className="mx-3 shadow-sm" onClick={renderProps.onClick}>login with Google</Button>
                )}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={() => closeModal()}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your password is too weak.
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Needed</h4>
          <p>
            password length between 8 - 100 characters,
            at least 1 uppercase,
            at least 1 lowercase,
            at least 1 digit,
            at lease 1 symbol
            and no space
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => closeModal()}>Close</Button>
        </Modal.Footer>
      </Modal>

    </Container>
  )
}

export default Regis