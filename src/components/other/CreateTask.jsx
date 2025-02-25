import React, { useState, useContext } from 'react'
// import { getLocalStorage } from '../../utils/localStorage'
import { AuthContext } from '../../context/AuthProvider'

function CreateTask() {
  const [userData, setUserData]=useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [date, setDate] = useState('')
  
  // const [newTask, setNewTask] = useState({})


  const submitHandler = (e) => {
    e.preventDefault()
    const task={ title, description, date, category, active: false, new_task: true, completed: false, failed: false }
    console.log(title, description, date, category);
    
    console.log(task, " task");
   
    const data =[... userData]
    console.log(data, "in submit handler");
    
    data.forEach(elem => {
      // console.log(elem.firstname);
      if (elem.firstname == assignTo) {
        elem.tasks.push(task)
        elem.taskNumbers.new_task=elem.taskNumbers.new_task+1
        // console.log(elem);
        console.log(localStorage.getItem(elem.firstname), "local storage get item")
      }
    });
    setUserData(data);
    localStorage.setItem('employees', JSON.stringify(data));

    console.log(data," in create task");
    
// localStorage.setItem('employees', JSON.stringify(data))
    setAssignTo("")
    setCategory("")
    setDate("")
    setDescription("")
    setTitle("")
  }
  return (
    
      <div className='bg-[#fbbaba] p-4 rounded '>
        <form onSubmit={(e) => { submitHandler(e) }} className='flex flex-wrap w-full bg-[#f1b7b7] items-start justify-between' action="">
          <div className='w-1/2'>
            <div>
              <h3 className='text-sm font-semibold text-gray-800 m-1'>Task Title</h3>
              <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className=' py-1 px-2 w-3/5 rounded outline-none  text-slate-100 bg-transparent border-[2px] border-gray-800 m-2' placeholder='Make a UI Design' />
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-800 m-1' >Date</h3>
              <input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} className='py-1 px-2 w-3/5 rounded outline-none bg-transparent border-[2px] border-gray-800 m-2 text-slate-100' placeholder='' />
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-800 m-1'>Assign To </h3>
              <input type="text" value={assignTo} onChange={(e) => { setAssignTo(e.target.value) }} className='py-1 px-2 w-3/5 rounded outline-none bg-transparent border-[2px] border-gray-800 m-2 text-slate-100' placeholder='employee name' />
            </div>
            <div>
              <h3 className='text-sm font-semibold text-gray-800 m-1'> Category</h3>
              <input type="text" value={category} onChange={(e) => { setCategory(e.target.value) }} placeholder='design, dev, etc' className='py-1 px-2 w-3/5 rounded outline-none bg-transparent text-slate-100 border-[2px] border-gray-800 m-2' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-start'>
            <h3 className=' text-sm  font-semibold text-gray-800 m-1'>Description</h3>
            <textarea value={description} onChange={(e) => { setDescription(e.target.value) }} className=' w-full h-100 text-sm py-2 px-3 rounded outline-none' name="" id=" " />
            <button className='bg-black py-3 px-2 hover:bg-red-400 text-slate-100 m-4'>Create Task</button>

          </div>

        </form>
      </div>
  )
}

export default CreateTask