import React, { useState } from 'react'

function Login({ handleLogin }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }
    return (
        <div className='flex  h-screen w-screen items-center justify-center'>
            <div className='border-2 border-red-400 p-2'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} 
                className='flex flex-col items-center justify-center '>
                    <input value={email} onChange={(e) => {
                        setEmail(e.target.value)

                    }}
                        className='text-black outline:none bg-transparent border-2 border-red-500 rounded-full py-3 px-5 placeholder:text-gray-600' type="email" placeholder='Enter email' required />
                    <input value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                        className='text-black outline:none bg-transparent border-2 border-red-400 rounded-full py-3 px-5 mt-2 placeholder:text-gray-600  ' type="password" placeholder='Enter password' required />
                    <button className=' text-black outline:none bg-red-600 border-none mt-7 border-red-600 rounded-full py-3 px-5 placeholder:text-white'>Log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login