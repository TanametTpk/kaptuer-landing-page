import React from 'react'
import Link from 'next/link'

export const Button = (props) =>{

    let buttonClass = props.primary ? "button primary" : "button"
    // concat string to avoid warning
    let link = props.href ? props.href : "#"

    return(
        <Link href={link}>
            <a className={buttonClass} onClick={()=>{props.action && props.action(props.id)}} style={ props.customStyle }>
                <div>
                    {props.text}
                </div>
            </a>
        </Link>
    )
}