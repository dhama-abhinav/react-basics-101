import React from 'react'
import { useStateValue } from './StateProvider'

function Login() {
    const [{user},dispatch]=useStateValue()
   
    return (
        <div>
            User logged in is --- {user}
        </div>
    )
}

export default Login
