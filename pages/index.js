import React, { Component } from 'react'
import KaptuerHeader from '../components/custom/KaptuerHeader'
import {Button} from '../components/Button'
import Section from '../components/Section'
import Stack from '../components/Stack'
import GridCol from '../components/Grid'
import Input from '../components/Input'
import Modal from 'react-modal'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { TitleSeperateLine } from '../components/SeperateLine'
import LoginForm from '../components/custom/LoginForm'
import { FB_TOKEN, GOOGLE_TOKEN } from '../../configs/oauth'
import signable from '../../util/api/libs/signable'
import { logIn } from '../../store/actions/user'
import { useFormHandle } from '../../util/hooks'
import '../assets/css/main.css'

// get information to display in that language
// TODO - change this to ssr
const information = require('../assets/info').en
Modal.setAppElement('#__next')

let buttons = [
    // {
    //     key:"home",
    //     href:"/home",
    //     text:"home",
    //     primary:false
    // },
    // {
    //     key:"menu",
    //     text:"menu",
    //     contents:[
    //         {
    //             key:"c1",
    //             text:"choice 1",
    //             href:"/choice1"
    //         },
    //         {
    //             key:"c2",
    //             text:"choice 2",
    //             href:"/choice2"
    //         },
    //         {
    //             key:"c3",
    //             text:"choice 3",
    //             href:"/choice3"
    //         },
    //     ]
    // },
    // {
    //     key:"pricing",
    //     href:"/pricing",
    //     text:"pricing",
    //     primary:false
    // },
    {
        key:"signup",
        href:"",
        text:"signup",
        primary:false
    },
    {
        key:"login",
        href:"",
        text:"LOGIN",
        primary:true
    },
]

export default class LandingPage extends Component {

    constructor(props){

        super(props)

        this.state = {
            currentY:0,
            email:"",
            modalSingupIsOpen: false,
            modalLoginIsOpen: false,
        }

    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (e) => {

        let currentY = window.scrollY;
        this.setState({currentY})
        
    }

    headerButtonOnClick = ( key ) => {
        
        if(key === "signup"){
            // open sign-up modal
            this.openSignupModal()
        }
        else if(key === "login"){
            this.openLoginModel()
        }

    }

    onInputEmailChange = ( e ) => {
        
        const email = e.target.value
        
        this.setState({email})
        
    }

    openLoginModel = () => {
        this.closeSignupModal()
        this.setState({modalLoginIsOpen: true});
    }

    closeLoginModal = () => {
        this.setState({modalLoginIsOpen: false});
    }

    openSignupModal = () => {
        this.closeLoginModal()
        this.setState({modalSingupIsOpen: true});
    }

    closeSignupModal = () => {
        this.setState({modalSingupIsOpen: false});
    }

    login = (res, type) => {
        // define
        let email = null;
        let password = null;
        let name = null;
        let token = null;
        let picture = null;

        switch (type) {

            case "facebook":
                // console.log(res);
                email = res.email;
                name = res.name;
                token = res.accessToken;
                picture = res.picture.data.url;
                break;

            case "google":
                // console.log(res);
                email = res.profileObj.email;
                name = res.profileObj.name;
                token = res.tokenObj.access_token;
                picture = res.profileObj.imageUrl;
                break;

            case "local":
                email = res.email;
                password = res.password;
                break;
                
            default:
                // else
                break;
        }

        let payload = { email, name, token, picture , password , type }
        console.log(payload);

    };

    render() {

        // check scrolling for display shadow of header
        const shadow = this.state.currentY <= 50 ? false : true

        return (
            <div className="Landing-page" >

                {/* custom header */}
                <KaptuerHeader logo="/logo.svg" action={this.headerButtonOnClick} buttons={buttons} shadow={shadow} />

                {/* first section */}
                <Section backgroundColor="white" height="100vh" >
                    <Stack minWidth={"450px"} maxWidth={"50%"} >

                        {/* slogan of organize */}
                        <div style={{paddingBottom:"37px" , fontSize:"3rem"}}>
                            {information.LANDING_MAIN_SLOGAN}
                        </div>
                        <div style={{paddingBottom:"37px" , color:"gray"}}>
                            {information.LANDING_MAIN_DEF}
                        </div>

                        {/* main input */}
                        <div className="Login-signup-form">
                            <Input placeholder="name@company.com" onChange={this.onInputEmailChange} />
                            <Button customStyle={{ margin: "0px 12px" }} href="/signup" text={information.LANDING_MAIN_SIGNUP_BUTTON} primary />
                        </div>

                    </Stack>
                </Section>

                {/* signup modal */}
                <Modal
                    closeTimeoutMS={180}
                    isOpen={this.state.modalSingupIsOpen}
                    onRequestClose={this.closeSignupModal}
                    contentLabel="Example Modal"
                    className="Modal-signup"
                    overlayClassName="Modal-Overlay-login"
                >

                    {/* modal information */}
                    <Stack minWidth={"450px"} maxWidth={"70%"} >

                        <div style={{paddingBottom:"37px" , fontSize:"3rem" , textAlign:'center'}}>
                            {information.LANDING_MODAL_TITLE}
                        </div>

                        <div style={{paddingBottom:"37px" , color:"gray" , textAlign:'center'}}>
                            {information.LANDING_MODAL_DESCRIPTION}
                        </div>

                    </Stack>

                    {/* modal input */}
                    <div className="Login-signup-form">
                        <Input placeholder="name@company.com" onChange={this.onInputEmailChange} />
                        <Button customStyle={{ margin: "0px 12px" }} href="/signup" text={information.LANDING_MAIN_SIGNUP_BUTTON} primary />
                    </div>

                    {/* modal policy part */}
                    <Stack minWidth={"450px"} maxWidth={"50%"} >

                        <div style={{paddingTop:"37px" , color:"gray" , textAlign:'center'}}>
                            <p>
                                {information.LANDING_MODAL_POLICIES[0]} <a className="hilightLink" href="/">Privacy Policy</a> {information.LANDING_MODAL_POLICIES[1]} <a className="hilightLink" href="/" >Terms of Service.</a>
                            </p>
                            
                        </div>

                    </Stack>

                </Modal>

                {/* Login modal */}
                <Modal
                    closeTimeoutMS={180}
                    isOpen={this.state.modalLoginIsOpen}
                    onRequestClose={this.closeLoginModal}
                    className="Modal-login"
                    overlayClassName="Modal-Overlay-login"
                >

                    {/* Title of modal */}
                    <label style={{fontSize:"2.5rem"}} >Log In</label>

                    {/* OAuth With other Provider */}
                    <GridCol gap="20px" customStyle={{margin:"25px 0px"}} >

                        <FacebookLogin
                            appId="458064678311812"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={(res)=>this.login(res,"facebook")} />

                        <GoogleLogin
                            clientId="334399017995-ciok6m57onhc5u54o7sqdamhi00agt7a.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={(res)=>this.login(res,"google")}
                            cookiePolicy={'single_host_origin'} />

                    </GridCol>
                    
                    {/* Seperate Line */}
                    <TitleSeperateLine title="OR" />

                    {/* Login form */}
                    <LoginForm onSubmit={(res)=>this.login(res,"local")} />

                    {/* switch to signup modal */}
                    <p style={{color:"gray"}}>Don’t have an account? <label className="hilightLink" onClick={this.openSignupModal} >Sign up</label></p>

                </Modal>

            </div>
        )
    }
}
