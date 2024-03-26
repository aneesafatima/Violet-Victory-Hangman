import React from 'react'

function InputBox() {
  return (
    <div className='flex justify-center items-center h-[20vh]  text-gray-400'>
      <input type="text" placeholder='Enter the number of rounds' className='py-2 px-3 w-[60vw] rounded-3xl shadow-md bg-[#192a32] outline-none mr-5 font-semibold' />
      <button type="submit" className='py-2 px-5 rounded-3xl shadow-md bg-[#192a32] hover:bg-[#233a45] hover:text-gray-50 font-semibold'>Enter</button>
    </div>
  )
}

export default InputBox
