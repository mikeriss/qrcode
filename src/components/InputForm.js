import React from 'react'
import InputField from './InputField'
import GenerateQrButton from './GenerateQrButton'

function InputForm({ onInputChange }) {
  

  return (
    <div className='col-span-2 p-6 gap-4'>
        <InputField onChange={onInputChange}></InputField>
        <GenerateQrButton value={"aa"}></GenerateQrButton>

    </div>
  )
}

export default InputForm