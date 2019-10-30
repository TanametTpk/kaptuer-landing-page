import React, {useEffect} from 'react'
import Register from '../layouts/Regis'
import { initGA, pageView } from '../util/analytics/ga'
import Card from '../components/Card'

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
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , height:"100vh" , backgroundImage:"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}>
            <Card customStyle={{minWidth:"500px" , padding:"48px 24px" , backgroundColor:"white" , borderRadius:"20px" }} >
                <Register />
            </Card>
        </div>
    )
}

export default index
