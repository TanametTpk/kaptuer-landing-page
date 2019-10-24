import React, {useEffect} from 'react'
import Register from '../layouts/Regis'
import '../assets/css/Customs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { initGA, pageView } from '../util/analytics/ga'

const index = () => {

    useEffect(() => {
        
        // Analytic
        if (!window.GA_INITIALIZED){
            initGA()
            window.GA_INITIALIZED = true
        }
        pageView() 
        
    })

    return (
        <Register />
    )
}

export default index
