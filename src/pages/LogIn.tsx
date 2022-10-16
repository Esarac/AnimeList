import React, { useState } from 'react'
import { logIn } from '../services/loginService'

function LogIn() {
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const submit = () => {
        console.log({username, password})
        logIn(username, password)
        .then((v)=>{
            console.log(v)
        })
        .catch((e)=>{
            console.log(e)
        })
    }

    return (
        <div>
            <h1>Log In</h1>
            <h2>Username</h2>
            <input type='text' onChange={(v)=>setUsername(v.target.value)}/>
            <h2>Password</h2>
            <input type='password' onChange={(v)=>setPassword(v.target.value)}/>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default LogIn