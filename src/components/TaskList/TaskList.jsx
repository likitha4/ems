import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
function TaskList({ data }) {
    console.log(data)
    return (
        <div id='tasklist' className='h-[50%]  overflow-x-auto flex items-center justify-start gap-5  flex-nowrap w-full  mt-10'>
            {data.tasks.map((elem, id) => {
                console.log(elem,"id", id);
                if (elem.active)
                    return <AcceptTask key={id} data={elem} />
                if (elem.new_task)
                    return <NewTask key={id} data={elem} />
                if (elem.completed)
                    return <CompleteTask key={id} data={elem}/>
                if(elem.failed)
                    return <FailedTask key={id} data={elem}/>
            
            })}

            {/* <AcceptTask />
            <NewTask />
            <CompleteTask />
            <FailedTask /> */}
            {/* <div className=' flex-shrink-0 h-full w-[300px] p-4  bg-green-700 rounded-xl '>
                <div className=' flex justify-between items-center'>
                    <h3 className='bg-red-600  text-sm px-3 py-2 rounded text-slate-100'>    end
                    </h3>
                    <h4 className=' text-slate-100'> 9 november 2024</h4>
                </div>
                <h2 className=' text-slate-100 text-2xl font-semibold mt-5 '>meditation</h2>
                <p className='text-sm  text-slate-100 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, eaque.</p>
            </div> */}
        </div>
    )
}

export default TaskList