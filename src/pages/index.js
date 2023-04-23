import InputForm from "@/components/InputForm"
import QrCode from "@/components/QrCode"
import { useState } from "react"

export default function Home() {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    //console.log(inputValue)
  }

  
  return (
    <main className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen pt-36 px-2">
      <div className="container mx-auto max-w-4xl bg-white rounded-md shadow">
        <div className="md:grid md:grid-cols-3">
            <InputForm onInputChange={handleInputChange} />
            <QrCode value={inputValue} className="mb-3-sm"/>
        </div>
      </div>
      
    </main>
  )
}
