import {useState} from "react"
import Button from "./Component/Button"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl ">
          <Button colorName="Red" changeColor={()=> setColor("red")}/>    
          <Button colorName="Blue" changeColor={()=> setColor("blue")}/>     
          <Button colorName="Green" changeColor={()=> setColor("green")}/>     
 
        </div>
      </div>
    </div>
  )
}

export default App
