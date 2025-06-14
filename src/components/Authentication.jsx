import { useState } from 'react'

export default function Authentication() {
    const [isRegistration, setIsRegistration] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthenticating, setIsAuthenticating] = useState(false)

    async function handleAuthenticate() {

    }

    return (
        <>
            <h2 className="sign-up-text">{isRegistration?  "Sign Up" : "Login" }</h2>
            <p>{isRegistration ? 'Create an account!' : 'Sign in to your account!'}</p>
            <input value={email} placeholder="Email"type="email" onChange={(event) => {
                setEmail(event.target.value)
            }}/>
            <input value={password} placeholder="********" type="password" onChange={(event) => {
                setPassword(event.target.value)
            }}/>
            <button onClick={handleAuthenticate}>
                <p> Submit </p>
            </button>
            <hr/>
            <div className="register-content">
                <p>{isRegistration ? 'Already have an account?' : 'Don\'t have an account?'}</p>
                <button onClick={() => { setIsRegistration(!isRegistration) }}>
                    <p>{isRegistration ? 'Sign in' : 'Sign up'}</p>
                </button>
            </div>
        </>
    )

}