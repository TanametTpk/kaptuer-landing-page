import React, {useState} from 'react'
import '../assets/css/Customs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../components/Card'
import { Button } from 'react-bootstrap'
import { TitleInput } from '../components/Input'
import { connect } from 'react-redux'
import { requestRecoveryPassword } from '../store/actions/user'

const index = (props) => {
    
    let [email , setEmail] = useState("")
    
    const sendForgetPassword = () => {

        props.requestRecoveryPassword({email});

    }

    return (
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" , backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}>
            <Card customStyle={{display:"flex" , justifyContent:"center" , alignItems:"center", minWidth:"600px" , padding:"42px 42px" , backgroundColor:"white" , borderRadius:"20px" }} >
                
                <h3 style={{marginBottom: '1.2em'}}>Forgot your password?</h3>
                <TitleInput title="Email Address" value={email} onChange={({target:{value}}) => setEmail(value)} customStyle={{width:'80%', marginBottom: '1.5em', fontSize: '14px'}} />
                <div style={{display:"flex" , justifyContent:"flex-end" , width:"80%"}}>
                    <Button variant={ email ? "primary" : "secondary"} onClick={sendForgetPassword} disabled={!email} >
                        Send Me Instructions
                    </Button>
                </div>

            </Card>
        </div>
    )
}

const mapDispatchToProps = {
    requestRecoveryPassword
}

export default connect(null, mapDispatchToProps)(index)
