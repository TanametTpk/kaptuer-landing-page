import React from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'

import { FB_TOKEN, GOOGLE_TOKEN } from '../../configs/oauth'
import api from '../../util/api'
import API from '../../configs/apis'
import signable from '../../util/api/libs/signable'
import { useFormHandle } from '../../util/hooks'

import Link from 'next/link'

function Regis() {

  const [user, handleFormChange] = useFormHandle({
    name: "",
    email: "",
    password: "",
  });

  const registration = async (payload, method) => {

    let res = await api.user.createUser(signable[method](payload), (err) => console.log(err))
    if (res.status === 200) {
      res = await api.user.login(signable[method](payload), (err) => console.log(err))
      if (res.status === 200) window.location.href = API.APP;
    } else {
      //something happen
    }
  }

  return (
    <Container className="login-box">
      <Row style={{ minWidth: "35%" }}>
        <Col sm={12}>
          <Form className="mx-3">
            <Form.Group controlId="formBasicName">
              <Form.Label>Your name</Form.Label>
              <Form.Control type="text" name="name" value={user.name} onChange={handleFormChange} placeholder="Enter name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" value={user.email} onChange={handleFormChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={user.password} onChange={handleFormChange} placeholder="Password" />
            </Form.Group>
          </Form>
          <Row>
            <Col className="d-flex flex-column">
              <Button className="mx-3 mb-2" onClick={() => registration(user, "LocalSign")}>signup</Button>
              <Link href="/"><Button variant="outline-primary" className="mx-3 mb-2" >back to login</Button></Link>
              <FacebookLogin
                appId={FB_TOKEN}
                autoLoad={false}
                fields="name,email,picture"
                callback={(response) => registration(response, "FacebookSign")}
                render={renderProps => (
                  <Button variant="facebook" className="mx-3 mb-2" onClick={renderProps.onClick}>signup with Facebook</Button>
                )}
              />
              <GoogleLogin
                clientId={GOOGLE_TOKEN}
                buttonText="Login with google"
                onSuccess={(response) => registration(response, "GoogleSign")}
                onFailure={(response) => console.log(response)}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                  <Button variant="light" className="mx-3 shadow-sm" onClick={renderProps.onClick}>signup with Google</Button>
                )}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Regis