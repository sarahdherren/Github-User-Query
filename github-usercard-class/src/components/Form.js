import React from 'react'
import Landing from './Landing';

export default function Form(props) {

   const submitHandler = e => {
        e.preventDefault();
        props.searchUser(props.user)
    }

    return (
        <form onSubmit = {submitHandler} className='form'>
            <input
                type='text'
                placeholder='github username'
                id='username'
                name='user'
                value={props.user}
                onChange={props.changeHandler}
            />
            <button>Find Repos</button>
            <Landing /> 
        </form>
    )
}
