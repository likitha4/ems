import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className=' flex-shrink-0 h-full w-[300px] p-4 bg-green-700 rounded-xl text-slate-200 '>
    <div className=' flex justify-between items-center'>
        <h3 className='bg-red-600  text-sm px-3 py-2 rounded text-slate-100'> {data.category}
        </h3>
        <h4 className=' text-slate-100'> {data.date}</h4>
    </div>
    <h2 className=' text-slate-100 text-2xl font-semibold mt-5 '>{data.title}</h2>
    <p className='text-sm  text-slate-100 mt-2'>{data.description}</p>
<div className='mt-5  text-slate-100'>
  <button className='w-full rounded'>Failed</button>
</div>

</div>)
}

export default FailedTask