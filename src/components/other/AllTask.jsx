import React,{useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData, setUserData]=useContext(AuthContext)
  // console.log(userData," in all task");
  
  return (
    <div className='p-8 bg-[#1c1c1c] rounded mt-5 mb-2'>
      <div className='bg-red-300 mb-2 py-2 px-4 flex justify-between rounded'>
      <h2  className='w-1/5 '>Employee Name</h2>
        <h3 className='w-1/5'>New Task</h3>
        <h5 className='w-1/5'>Active Task</h5>
        <h5 className='w-1/5'>Completed</h5>
        <h5 className='w-1/5'>Failed</h5>
    </div>
<div className=''>
{userData.map((elem, idx)=>{
  return <div key={idx}className=' border-2 border-emerald-200 mb-2 py-2 px-4 flex justify-between rounded '>
        <h2  className='w-1/5 text-purple-500 font-semibold'>{elem.firstname}</h2>
        <h3 className='w-1/5 text-blue-700 font-semibold'>{elem.taskNumbers.new_task}</h3>
        <h5 className='w-1/5 text-yellow-500 font-semibold' >{elem.taskNumbers.active}</h5>
        <h5 className='w-1/5 text-green-600 font-semibold'>{elem.taskNumbers.completed}</h5>
        <h5 className='w-1/5 text-red-700 font-semibold'>{elem.taskNumbers.failed}</h5>
    </div>
})}
</div>
    
    </div>
  )
}

export default AllTask