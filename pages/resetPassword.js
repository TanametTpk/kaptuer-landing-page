import React, {useState} from 'react'
import Card from '../components/Card'
import { connect } from 'react-redux'
import { resetPassword } from '../store/actions/user'
import { Form, Button } from 'react-bootstrap'
import { useFormHandle } from '../util/hooks'
import Router from 'next/router'

const index = (props) => {
    
    const [user, handleFormChange] = useFormHandle({
        password: "",
        confirmpassword: "",
    });
    const [isClick, setClick] = useState(false)
    
    const sendForgetPassword = async() => {

        setClick(true)
        if (!user.password || !user.confirmpassword || user.password !== user.confirmpassword) return

        let { token } = props.query
        props.resetPassword({password: user.password, token}, () => {
            Router.push('/forgotPassword')
        });

    }

    return (
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" , backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}>
            <Card customStyle={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center", minWidth:"600px" , padding:"42px 42px" , backgroundColor:"white" , borderRadius:"20px" }} >
                
                <h3 style={{marginBottom: '1.2em'}}>Reset Password</h3>
                <Form style={{width:"80%"}}>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control isInvalid={ isClick && user.confirmpassword && user.confirmpassword !== user.password} type="password" name="password" value={user.password} onChange={handleFormChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control isInvalid={ isClick && user.confirmpassword && user.confirmpassword !== user.password} type="password" name="confirmpassword" value={user.confirmpassword} onChange={handleFormChange} placeholder="Confirm Password" />
                        <Form.Control.Feedback type="invalid">
                            password is not matched
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form>

                <div style={{display:"flex" , justifyContent:"flex-end" , width:"80%"}}>
                    <Button className="mx-3 mb-2" onClick={() => sendForgetPassword()}>
                        Reset
                    </Button>
                </div>

            </Card>
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
