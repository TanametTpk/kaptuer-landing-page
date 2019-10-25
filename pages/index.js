import React, { useState, useEffect } from 'react'
import KaptuerHeader from '../components/custom/KaptuerHeader'
import {Button} from '../components/Button'
import Section from '../components/Section'
import Stack from '../components/Stack'
import GridCol from '../components/Grid'
// import Input from '../components/Input'
import Modal from 'react-modal'
import GoogleLogin from 'react-google-login'
import FacebookLogin from 'react-facebook-login'
import { TitleSeperateLine } from '../components/SeperateLine'
import LoginForm from '../components/custom/LoginForm'
import { FB_TOKEN, GOOGLE_TOKEN } from '../configs/oauth'
import signable from '../util/api/libs/signable'
import API from '../configs/apis'
import { connect } from 'react-redux'
import { logIn } from '../store/actions/user'
import { useScrollY, useModal } from '../util/hooks'
import Loader from '../components/Loader'
import Router from 'next/router'

import { initGA, pageView, logEvent } from '../util/analytics/ga'

import '../assets/css/main.css'

// get information to display in that language
// TODO - change this to ssr
const information = require('../assets/info').th
Modal.setAppElement('#__next')

let buttons = [
    {
        key:"signup",
        href:"/signup",
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

const LandingPage = (props) => {
    
    let currentY = 0
    if (process.browser) {
        // client-side-only code
        currentY = useScrollY()
    }

    let [state, setState] = useState({
        email:"",
    })

    useEffect(() => {
        
        // Analytic
        if (!window.GA_INITIALIZED){
            initGA()
            pageView()            
            window.GA_INITIALIZED = true
        }
        
    })

    let [loginModal, openLogin, closeLogin] = useModal()
    let [signupModal, openSignup, closeSignup] = useModal()
    let [isLoad, setLoad] = useState(false)
    
    const login = async (payload, method) => {

        if (await props.logIn(signable[method](payload))) {
            window.location.href = API.APP;
            setLoad(true)
        }

    }

    const headerButtonOnClick = ( key ) => {
        
        if(key === "signup"){
            // open sign-up modal
            // openSignup()
            logEvent("langingPage" , "nav signup")
            Router.push('/signup')
        }
        else if(key === "login"){
            // openLoginModel()
            openLogin()
            logEvent("langingPage" , "nav login")
        }

    }

    const onInputEmailChange = ( e ) => {
        
        const email = e.target.value
        
        setState({...state, email})
        
    }

    // ********************   just open close modal    ********************************

    const openLoginModel = () => {
        closeSignup()
        openLogin()
    }

    const closeLoginModal = () => {
        closeLogin()
    }

    const openSignupModal = () => {
        closeLogin()
        openSignup()
    }

    const closeSignupModal = () => {
        closeSignup()
    }

    const onClickTryFree = () => {
        logEvent("langingPage" , "try it free button")
        Router.push('/signup')
    }

    // ********************************************************************************

    // check scrolling for display shadow of header
    const shadow = currentY <= 50 ? false : true

    if (isLoad) return <Loader />

    return (
        <div className="Landing-page" >

            {/* custom header */}
            <KaptuerHeader logo="/logo.svg" action={headerButtonOnClick} buttons={buttons} shadow={shadow} />

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
                    <div className="Login-signup-form" onClick={onClickTryFree}>
                        {/* <Input placeholder="name@company.com" onChange={onInputEmailChange} /> */}
                        <Button customStyle={{ margin: "0px 12px" }} href="/signup" text={information.LANDING_MAIN_SIGNUP_BUTTON} primary />
                    </div>

                </Stack>
            </Section>

            {/* signup modal */}
            <Modal
                closeTimeoutMS={180}
                isOpen={signupModal}
                onRequestClose={closeSignupModal}
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
                    {/* <Input placeholder="name@company.com" onChange={onInputEmailChange} /> */}
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
                isOpen={loginModal}
                onRequestClose={closeLoginModal}
                className="Modal-login"
                overlayClassName="Modal-Overlay-login"
            >

                {/* Title of modal */}
                <label style={{fontSize:"2.5rem"}} >Log In</label>

                {/* OAuth With other Provider */}
                <GridCol gap="20px" customStyle={{margin:"25px 0px"}} >

                    <FacebookLogin
                        appId={FB_TOKEN}
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={(res)=>login(res,"FacebookSign")} />

                    <GoogleLogin
                        clientId={GOOGLE_TOKEN}
                        buttonText="Login"
                        onSuccess={(res)=>login(res,"GoogleSign")}
                        cookiePolicy={'single_host_origin'} />

                </GridCol>
                
                {/* Seperate Line */}
                <TitleSeperateLine title="OR" />

                {/* Login form */}
                <LoginForm onSubmit={(res)=>login(res,"LocalSign")} />

                {/* switch to signup modal */}
                <p style={{color:"gray"}}>Don’t have an account? <label className="hilightLink" onClick={openSignupModal} >Sign up</label></p>

            </Modal>

        </div>
    )
}

const mapStateToProps = (state) => ({
    user:state.user
})

const mapDispatchToProps = {
    logIn
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage)