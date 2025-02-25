import React from 'react'

function AcceptTask({data}) {
console.log(data, "in accept task");

  return (
    <div className='flex-shrink-0 h-full w-[300px] p-4  bg-green-500 rounded-xl text-slate-100 '>
    <div className=' flex justify-between items-center'>
        <h3 className='bg-red-600  text-sm px-3 py-2 rounded text-slate-100'> {data.category}
        </h3>
        <h4 className=' text-slate-100'> {data.date}</h4>
    </div>
    <h2 className=' text-slate-100 text-2xl font-semibold mt-5 '>{data.title}</h2>
    
    <p className='text-sm  text-slate-100 mt-2'>{data.description}</p>
    <div className='flex justify-between mt-4  text-slate-100 '>
        <button className='bg-green-700 py-1 px-2  rounded text-sm '>Mark as Completed</button>
        <button className='bg-red-800 py-1 px-2 text-sm rounded'>Mark as Failed</button>
    </div>
</div>
  )
}

export default AcceptTask