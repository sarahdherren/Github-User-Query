import React from 'react'
import github from '../images/github-octocat-logo-png-transparent.png';

export default function Landing() {
    return (
        <div className='landing' >
            <img src={github} className='landing-logo' alt='logo' />
            <p>enter a github username in the form to continue</p>
        </div>
    )
}
