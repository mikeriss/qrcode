import React from 'react'

const InputField = ({ onChange }) => {
  return (
    <div>
        <label
            className='font-semibold text-md'
        >Your String</label>
        <input
            type="string"
            className='w-full border-2 py-1 px-3 text-gray-700 rounded-sm mt-2'
            placeholder='Enter your text here..'
            onChange={onChange}
        >
        
        </input>
    </div>
  )
}

export default InputField