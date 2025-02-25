import React from 'react'
import { setLocalStorage } from '../../utils/localStorage'

function Header(props) {
 


  const logoutUser = () => {

    localStorage.setItem('loggedInUser', '')
    // console.log(props.changeUser);
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-center justify-between'>
      {/* {console.log(props)} */}
      <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{props.data ? props.data.firstname : 'Admin'}</span>👋
      </h1>
      <button className='bg-red-500 text-lg text-white px-5 py-2 rounded font-medium' onClick={logoutUser}>Logout</button>
    </div>
  )
}

export default Header