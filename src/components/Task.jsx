import React from 'react'
import { TfiPencil } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { Line, Circle } from 'rc-progress';
import { PiNotebookFill } from "react-icons/pi";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Task = () => {

  const navigate = useNavigate();

  return (
    <div className='text-white relative mx-3 flex flex-col space-y-3 mt-5 pt-5'>
      <div><button className='px-3 py-1 text-black font-semibold mt-1 rounded-xl bg-[#BA83DE]'
             onClick={()=>navigate(-1)}> {"<"}- Back</button></div>

      {/* Create Icon  */}
      <div onClick={()=> navigate("/add-task")} className='w-[60px] h-[60px] bg-[#ba83de] hover:cursor-pointer
       rounded-full absolute flex justify-center items-center text-xl right-6 bottom-[5rem]'><FaPlus/></div>

      {/* header  */}
      <div>

        <div>
          <p className='text-white font-semibold text-[25px]'>You have got 5 tasks today to complete <TfiPencil /></p>
          <img src="" alt="" />
        </div>

        <div>
          <div className='bg-[#1e1e1e] text-[ffffff] flex items-center px-3 py-2 rounded-xl my-3 gap-3'>
            <FaSearch />
            <input className='bg-[#1e1e1e] w-full' type="text" placeholder={`Search The Task Here `} />
          </div>
        </div>
      </div>

      {/* Progress  */}
      <div className='flex flex-col space-y-3'>

        <div className='flex justify-between '>
          <p className='font-bold'>Progress</p>
          <button className='text-sm text-[#ba83de] '>See All</button>
        </div>

        <div className='bg-[#181818] flex flex-col px-2 py-3 rounded-lg space-y-2'>
          <p className='text-[16px] font-semibold'>Daily Task</p>
          <p className='text-[12px] text-gray-400  '>2/3 Task Completed</p>

          <div className='flex flex-col gap-2'>
            <p>You are almost done go ahead</p>
            <Line className='bg-[#] text-[#9b64bf] rounded-lg' percent={40} strokeWidth={5} strokeColor="#9b64bf" />
          </div>
        </div>

      </div>

      {/* Todays section  */}
      <section className='flex flex-col space-y-3'>

        <div className='flex justify-between '>
          <p className='font-bold'>Today's Task</p>
          <button className='text-sm text-[#ba83de] '>See All</button>
        </div>

        <div className='flex flex-col space-y-3'>
          <div className='bg-[#181818] border-l-[15px] border-red-700 flex items-center justify-between px-3 py-2 rounded-lg'>
            <div className=''>
              <p className='text-[12px]'>Mobile App Research</p>
              <PiNotebookFill />
            </div>
            {/* <input type="checkbox" className='w-5 h-5 [#ba83de] accent-[#ba83de]  border-[#ba83de] rounded-[200px]  dark:border-[#ba83de] bg-[#ba83de]' /> */}
            <div className='bg-[#ba83de] w-5 h-5 rounded-full text-black flex justify-center items-center'><IoMdCheckmark /></div>
          </div>
          <div className='bg-[#181818] border-l-[15px] border-yellow-300  flex items-center justify-between px-3 py-2 rounded-lg'>
            <div>
              <p className='text-[12px]'>Mobile App Research33</p>
              <PiNotebookFill />
            </div>
            {/* <input type="checkbox" className='w-5 h-5 [#ba83de] accent-[#ba83de]  border-[#ba83de] rounded-[200px]  dark:border-[#ba83de] bg-[#ba83de]' /> */}
            <div className='bg-[#ba83de] w-5 h-5 rounded-full text-black flex justify-center items-center'><IoMdCheckmark /></div>
          </div>
        </div>

      </section>

      {/* tommorow Section  */}
      <section className='flex flex-col space-y-3 mb-5 pb-5'>

        <div className='flex justify-between '>
          <p className='font-bold'>Tommorow's Task</p>
          <button className='text-sm text-[#ba83de] '>See All</button>
        </div>

        <div className='flex flex-col space-y-3'>
          <div className='bg-[#181818] border-l-[15px] border-red-700 flex items-center justify-between px-3 py-2 rounded-lg'>
            <div className=''>
              <p className='text-[12px]'>Mobile App Research</p>
              <PiNotebookFill />
            </div>
            <div className='border-2 border-[#ba83de] w-5 h-5 rounded-full'></div>
          </div>
          <div className='bg-[#181818] border-l-[15px] border-yellow-300  flex items-center justify-between px-3 py-2 rounded-lg'>
            <div>
              <p className='text-[12px]'>Mobile App Research</p>
              <PiNotebookFill />
            </div>
            {/* <input type="checkbox" /> */}
            <div className='border-2 border-[#ba83de] w-5 h-5 rounded-full'></div>
          </div>
        </div>

      </section>

    </div>
  )
}

export default Task
