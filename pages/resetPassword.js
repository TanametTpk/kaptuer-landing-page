import React, {useState, useEffect} from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { resetPassword } from '../store/actions/user'
import { Form, Button, Toast, Modal } from 'react-bootstrap'
import { useFormHandle, useInterval, useModal } from '../util/hooks'
import Router from 'next/router'
import Validator from '../util/api/libs/passwordValidator'

const index = (props) => {
    
    const [user, handleFormChange] = useFormHandle({
        password: "",
        confirmpassword: "",
    });

    const [ showModal, openModal, closeModal ] = useModal(false)

    const [isClick, setClick] = useState(false)
    const [currentTime, setCurrectTime] = useState(0)
    const [ isTimeRunning , setTimeRunning ] = useState(true)
    const end = Number(props.query.end || Date.now())

    useInterval(() => {

        let msLeft = end - Date.now()
        if (msLeft < 0){
            msLeft = 0
            setTimeRunning(false)
        }

        let secLeft = Math.floor(msLeft / 1000)
        setCurrectTime(secLeft)

    }, isTimeRunning ? 1000 : null)

    const sendForgetPassword = async() => {

        setClick(true)
        if (!user.password || !user.confirmpassword || user.password !== user.confirmpassword) return

        if (!Validator.validate(user.password)) {
            openModal()
            return
        }

        let { token } = props.query
        props.resetPassword({password: user.password, token});
        Router.push('/')
    }

    return (
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" , backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}>
            <Toast
                style={{
                    position: 'absolute',
                    top: 24,
                    right: 24,
                  }}
            >
                <Toast.Header closeButton={false}>
                    <strong className="mr-auto">Kaptuer</strong>
                </Toast.Header>
                <Toast.Body>
                    { 
                        currentTime < 1 && isTimeRunning ? 
                        "Estimating time...." 
                        :
                        (currentTime < 1 ? "You can't reset password in this moment." : `You have ${currentTime} seconds left to reset password`)
                    }
                </Toast.Body>
            </Toast>
            <Card customStyle={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center", minWidth:"600px" , padding:"42px 42px" , backgroundColor:"white" , borderRadius:"20px" }} >
                
                <h3 style={{marginBottom: '1.2em'}}>Reset Password</h3>
                <Form style={{width:"80%"}}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control isInvalid={ isClick && user.confirmpassword && user.confirmpassword !== user.password} disabled={currentTime < 1} type="password" name="password" value={user.password} onChange={handleFormChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control isInvalid={ isClick && user.confirmpassword && user.confirmpassword !== user.password} disabled={currentTime < 1} type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleFormChange} placeholder="Confirm Password" />
                        <Form.Control.Feedback type="invalid">
                            password is not matched
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>

                <div style={{display:"flex" , justifyContent:"flex-end" , width:"80%"}}>
                    <Button className="mx-3 mb-2" onClick={() => sendForgetPassword()} disabled={currentTime < 1} >
                        Reset
                    </Button>
                </div>

            </Card>
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
        </div>
    )
}

index.getInitialProps = ({query}) => {
    return {query}
}

const mapDispatchToProps = {
    resetPassword
}

export default connect(null, mapDispatchToProps)(index)
