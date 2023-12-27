import React from 'react'
import { useNavigate } from 'react-router-dom'

const AddTask = () => {
    const navigate = useNavigate();
    return (
        <div className='text-white mx-4'>

            <button className='px-3 py-1 text-black font-semibold mt-6 rounded-xl bg-[#BA83DE]'
             onClick={()=>navigate(-1)}> {"<"}- Back</button>

            <h1 className='text-center text-3xl py-3'>Create new task</h1>

            {/* task form  */}
            <p className='py-3'>Schedule</p>
            <form action="" className='space-y-4 pb-4'>


                <label htmlFor="" className='bg-[#181818]'>
                    <input type="text" className='bg-[#181818] px-2 py-3 w-full mx-auto rounded-lg' placeholder='Name' />
                </label>

                <textarea className='bg-[#181818] px-2 py-3 w-full mx-auto rounded-lg'
                    name="" id="" rows={6} rows-fixed cols={6}
                    placeholder='Description'
                ></textarea>

                {/* priority */}
                <div className='w-full pb-4 space-y-3'>
                    <p>Priority</p>
                    <div className='w-full flex gap-x-2 '>
                        <button className='px-4 py-1 border-2 border-red-600 rounded-xl'>Hard</button>
                        <button className='px-4 py-1 border-2 border-orange-600 rounded-xl'>Medium</button>
                        <button className='px-4 py-1 border-2 border-yellow-600 rounded-xl'>Low</button>
                    </div>
                </div>

                <div className='flex justify-between items-center'>
                  <p>Get alert for this task</p>
                  <input type="checkbox" />
                </div>

                <button className='w-full bg-[#BA83DE] text-white text-center py-2 rounded-xl'>Create Task</button>

            </form>

        </div>
    )
}

export default AddTask
