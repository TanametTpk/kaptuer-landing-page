import React , { useState } from 'react'
import PropTypes from 'prop-types'
import {TitleInput} from '../Input'
import { Button } from '../Button'
import Link from 'next/link'

const LoginForm = (props) => {

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    return(
        <div className="Login-form">

            <TitleInput
                title="Email Address"
                placeholder="name@company.com"
                onChange={ (e)=> setEmail(e.target.value ) }
            />

            <TitleInput
                title="Password"
                placeholder="Password"
                onChange={ (e)=> setPassword(e.target.value) }
                secure
            />

            <Button action={ () => props.onSubmit({email , password})} text="Log In" primary />

            <Link href="/forgotPassword">
                <a className="hilightLink" >Forgot password?</a>
            </Link>

        </div>
    )
}

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default LoginForm